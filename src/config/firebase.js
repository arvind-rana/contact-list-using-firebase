// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrUKNQeszbQY9on5CJWDqxjIpvNMmJ-cc",
  authDomain: "vite-contact-a462b.firebaseapp.com",
  projectId: "vite-contact-a462b",
  storageBucket: "vite-contact-a462b.appspot.com",
  messagingSenderId: "1012448394547",
  appId: "1:1012448394547:web:d79a833e4cf9437410d246"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);





 //y4Aa1OgKWsXyKXmRruuM