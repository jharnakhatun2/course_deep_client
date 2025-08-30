// src/layer/Firebase.config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBf1PYlRhbKSawZmlrbfqM6FpopQs3Qdu4",
  authDomain: "course-deep.firebaseapp.com",
  projectId: "course-deep",
  storageBucket: "course-deep.appspot.com",
  messagingSenderId: "39392239108",
  appId: "1:39392239108:web:c861fbb290512fae565f51"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
