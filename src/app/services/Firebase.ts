import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebase = initializeApp({
  apiKey: "AIzaSyAhDrAtyRoNwC4t40Sx4WYcuJk863IMcgw",
  authDomain: "todomota-58561.firebaseapp.com",
  projectId: "todomota-58561",
  storageBucket: "todomota-58561.appspot.com",
  messagingSenderId: "275623844843",
  appId: "1:275623844843:web:79af766e73697f13c297ae"
});

const db = getFirestore(firebase);
const auth = getAuth(firebase);

export { auth, db };