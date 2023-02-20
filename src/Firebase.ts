// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebase = initializeApp({
    apiKey: "AIzaSyAhDrAtyRoNwC4t40Sx4WYcuJk863IMcgw",
    authDomain: "todomota-58561.firebaseapp.com",
    projectId: "todomota-58561",
    storageBucket: "todomota-58561.appspot.com",
    messagingSenderId: "275623844843",
    appId: "1:275623844843:web:79af766e73697f13c297ae"
});

const auth = getAuth();
export const db = getFirestore(firebase);