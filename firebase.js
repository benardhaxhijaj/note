import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLCMUKb0nCbsQwDDLOOuryZtPn_U2yHi0",
  authDomain: "react-notes-30233.firebaseapp.com",
  projectId: "react-notes-30233",
  storageBucket: "react-notes-30233.appspot.com",
  messagingSenderId: "961258099276",
  appId: "1:961258099276:web:726f71ea72f909f4785ae9",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollections = collection(db, "notes");
