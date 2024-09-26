// src/pages/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAi4ahcLRvnv3fCkIz0aFmG51Gr1wtQi3I",
  authDomain: "log-auth-182dd.firebaseapp.com",
  databaseURL: "https://log-auth-182dd-default-rtdb.firebaseio.com",
  projectId: "log-auth-182dd",
  storageBucket: "log-auth-182dd.appspot.com",
  messagingSenderId: "34846735813",
  appId: "1:34846735813:web:b22d35eaa496ad6bb79fac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth and Provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
