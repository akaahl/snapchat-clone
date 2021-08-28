// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCGcuIouPBKMcx2zdJNq5RNVSpYbXCiptw",
  authDomain: "snapchat-clone-7842a.firebaseapp.com",
  projectId: "snapchat-clone-7842a",
  storageBucket: "snapchat-clone-7842a.appspot.com",
  messagingSenderId: "229347319026",
  appId: "1:229347319026:web:4b3a22fd3c57f65fb5046b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const store = getStorage(app);
const provider = new GoogleAuthProvider();

export { db, auth, store, provider };

console.log(firebaseConfig);
