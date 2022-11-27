// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwxNexZHHVZF5ZYwp4H_jYvn6XZqzypR0",
  authDomain: "todo-list-18a1e.firebaseapp.com",
  projectId: "todo-list-18a1e",
  storageBucket: "todo-list-18a1e.appspot.com",
  messagingSenderId: "4593738563",
  appId: "1:4593738563:web:bd9658e073e8f3694a05f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
