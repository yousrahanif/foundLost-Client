// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  


  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,

// apiKey: "AIzaSyCWgNJpaMhnLYB7Yl9KIu0HQU9Gq9v3Me0",
// authDomain: "simple-firebase-project-3dd52.firebaseapp.com",
// projectId: "simple-firebase-project-3dd52",
// storageBucket: "simple-firebase-project-3dd52.firebasestorage.app",
// messagingSenderId: "985262863312",
// appId: "1:985262863312:web:8fcf03766db578a5bf7fd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);