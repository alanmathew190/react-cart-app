// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// (Optional) import Firestore if you’ll store cart data online
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuk_fNN7GwueWH8Ik0uPjVRDL185DlC8Y",
  authDomain: "react-cart-app-85134.firebaseapp.com",
  projectId: "react-cart-app-85134",
  storageBucket: "react-cart-app-85134.firebasestorage.app",
  messagingSenderId: "210820194477",
  appId: "1:210820194477:web:4c77bbac746669522be624",
  measurementId: "G-LSY7ML9P4C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app); // optional — use if storing cart or user data in Firestore
