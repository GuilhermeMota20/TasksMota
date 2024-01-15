import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebase = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_SECOND_apiKey, 
  authDomain: process.env.NEXT_PUBLIC_SECOND_authDomain,
  projectId: process.env.NEXT_PUBLIC_SECOND_projectId,
  storageBucket: process.env.NEXT_PUBLIC_SECOND_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_SECOND_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_SECOND_appId,
  measurementId: process.env.NEXT_PUBLIC_SECOND_measurementId
});

const db = getFirestore(firebase);
const auth = getAuth(firebase);

export { auth, db };
