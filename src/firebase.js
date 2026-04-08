// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQeftoAeB1Ey6OsRGUEce2xC9Plw6xQIc",
  authDomain: "pokelog-73302.firebaseapp.com",
  projectId: "pokelog-73302",
  storageBucket: "pokelog-73302.firebasestorage.app",
  messagingSenderId: "341145955804",
  appId: "1:341145955804:web:71dc774c992e134cf8b319",
  measurementId: "G-C72Z551P3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export const analytics = getAnalytics(app);