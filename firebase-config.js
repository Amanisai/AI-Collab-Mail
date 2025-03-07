// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSoTGxGBa81Sb_iX80PDtEgrWE3NF972I",
  authDomain: "ai-collab-mail.firebaseapp.com",
  projectId: "ai-collab-mail",
  storageBucket: "ai-collab-mail.firebasestorage.app",
  messagingSenderId: "356152582322",
  appId: "1:356152582322:web:fdffe92b3640fd1355e9ab",
  measurementId: "G-96GJLF1NTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
