import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";


interface Podatek {
  username: string;
  title: string;
  description: string;
  createdAt: any;
}

export const Main = () => {
  const [user] = useAuthState(auth);
  
  const [podatki, setPodatki] = useState<Podatek[]>([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const pridobiPodatke = async () => {
    try {
      const colRef = collection(db, "posts");
      const q = query(colRef, orderBy("createdAt", sortOrder));

      onSnapshot(q, (snapshot) => {
        const x: Podatek[] = [];
        snapshot.docs.forEach((doc) => {
          x.push(doc.data() as Podatek);
        });
        setPodatki(x);
      });
    } catch (error) {
      console.error("Napaka pri pridobivanju podatkov:", error);
    }
  };

  useEffect(() => {
    pridobiPodatke();
  }, [sortOrder]);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSort = event.target.value as "asc" | "desc";
    setSortOrder(selectedSort);
  };

  return (
    <div>
      <h1>MAIN</h1>
      <div className="izpisPodatkov">
        
      {user && (
        <select
        name="sort"
        id="sort"
        onChange={handleSortChange}
        className="sort"
      >
        <option disabled value="default" selected>
          SORT BY
        </option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      )}


        {podatki &&
          podatki.map((podatek, index) => {
            const d =
              (podatek.createdAt.seconds +
                podatek.createdAt.nanoseconds / 1000000000) *
              1000;

            const datum = new Date(d);
            const formattedDate = datum.toLocaleDateString("sl-SI");

            return (
              <div className="podatkiPosebej" key={index}>
                <span>{podatek.username}</span> ({formattedDate})
                <br />
                <span>Title: </span>
                {podatek.title} <br />
                <span>Description: </span>
                {podatek.description} <br /> <br />
              </div>
            );
          })}
      </div>
    </div>
  );
};
