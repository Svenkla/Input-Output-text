import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const logUserOut = async () => {
    await signOut(auth);
    window.location.reload();
  };

  return (
    <div className="navbar">
      <Link to="/" className="link">
        MAIN
      </Link>
      {!user ? (
        <Link to="/Login" className="link">
          LOGIN
        </Link>
      ) : (
        <Link to="/createpost" className="link">
          Create Post
        </Link>
      )}

      {user && (
        <div className="profile">
          <p className="login-name">
            {auth.currentUser?.displayName}
            <img src={user?.photoURL || ""} width="20" height="20" />
          </p>

          <button onClick={logUserOut} className="buttonOdjava">
            LOGOUT
          </button>
        </div>
      )}
    </div>
  );
};
