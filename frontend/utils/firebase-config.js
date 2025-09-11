import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyANPKx8rCs62LwSdYdy2MbQxysZ-sKf0EU",
  authDomain: "react-movie-dashboard.firebaseapp.com",
  projectId: "react-movie-dashboard",
  storageBucket: "react-movie-dashboard.appspot.com",
  messagingSenderId: "898682575888",
  appId: "1:898682575888:web:7f65299087fb61ea25fe95",
  measurementId: "G-8JNHM9TH55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
