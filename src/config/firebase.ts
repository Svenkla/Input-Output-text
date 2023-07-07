// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1idUuyBBhNmN2TsPJIZxFbhdNoY8wni8",
  authDomain: "react-project1-eab44.firebaseapp.com",
  projectId: "react-project1-eab44",
  storageBucket: "react-project1-eab44.appspot.com",
  messagingSenderId: "1019474209110",
  appId: "1:1019474209110:web:987a9312920f6971820ef7",
  measurementId: "G-QL10BDC68F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
