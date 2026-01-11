// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbP251sEcEbXdd8NZpSloQinjRf8u1HBM",
  authDomain: "mern-book-inventory-8e448.firebaseapp.com",
  projectId: "mern-book-inventory-8e448",
  storageBucket: "mern-book-inventory-8e448.firebasestorage.app",
  messagingSenderId: "486067875919",
  appId: "1:486067875919:web:15aaab40503131ee6cfa3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app ;