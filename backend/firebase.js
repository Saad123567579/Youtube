// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth , GooglAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCee54iR5cTjypLJoN6LIJGERpNKspDeCQ",
  authDomain: "fir-6c3c6.firebaseapp.com",
  projectId: "fir-6c3c6",
  storageBucket: "fir-6c3c6.appspot.com",
  messagingSenderId: "240797541758",
  appId: "1:240797541758:web:75964f0dd94c8e11babf2f",
  measurementId: "G-KF7E35VK9N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const provider = new GooglAuthProvider();
export default app;