import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // <-- Fix the typo here


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVUzJzHVTuc8LJu5mVrufd26newm0Z5dE",
  authDomain: "saadtube-12790.firebaseapp.com",
  projectId: "saadtube-12790",
  storageBucket: "saadtube-12790.appspot.com",
  messagingSenderId: "535911078268",
  appId: "1:535911078268:web:0d9229d2526141f0a3ecf9",
  measurementId: "G-49JXH33EFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;