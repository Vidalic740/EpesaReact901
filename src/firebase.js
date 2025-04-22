// src/firebase.js
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzRmg-IKTnan6ujx5OtiYw4QMWlGf6dp0",
  authDomain: "epesa-f6353.firebaseapp.com",
  projectId: "epesa-f6353",
  storageBucket: "epesa-f6353.appspot.com",
  messagingSenderId: "1002423779001",
  appId: "1:1002423779001:web:2a2c0ea971f862aa58e568"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
export const db = getFirestore(app)
export const auth = getAuth(app);