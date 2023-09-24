import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebase = initializeApp({
  apiKey: "AIzaSyCfPMD9YucxXj0SlAlblTqK2blykDBE6Os",
  authDomain: "todotasks-5de4b.firebaseapp.com",
  projectId: "todotasks-5de4b",
  storageBucket: "todotasks-5de4b.appspot.com",
  messagingSenderId: "552802884467",
  appId: "1:552802884467:web:2bd581525b4e41f299c306",
  measurementId: "G-SW5SV5HTFD"
});

const db = getFirestore(firebase);
const auth = getAuth(firebase);
const analytics = getAnalytics(firebase);

export { auth, db };