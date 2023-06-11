// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf1PYlRhbKSawZmlrbfqM6FpopQs3Qdu4",
  authDomain: "course-deep.firebaseapp.com",
  projectId: "course-deep",
  storageBucket: "course-deep.appspot.com",
  messagingSenderId: "39392239108",
  appId: "1:39392239108:web:c861fbb290512fae565f51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;