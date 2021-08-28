// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCGcuIouPBKMcx2zdJNq5RNVSpYbXCiptw",
  authDomain: "snapchat-clone-7842a.firebaseapp.com",
  projectId: "snapchat-clone-7842a",
  storageBucket: "snapchat-clone-7842a.appspot.com",
  messagingSenderId: "229347319026",
  appId: "1:229347319026:web:4b3a22fd3c57f65fb5046b",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
