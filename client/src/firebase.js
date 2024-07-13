// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b000b.firebaseapp.com",
  projectId: "mern-estate-b000b",
  storageBucket: "mern-estate-b000b.appspot.com",
  messagingSenderId: "722232734378",
  appId: "1:722232734378:web:ab12490ec298cdf485d6d3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);