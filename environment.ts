// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNBXsMtpxLFsv8N36MPzS1bARnt9vh5Vs",
  authDomain: "beginning-bjj.firebaseapp.com",
  projectId: "beginning-bjj",
  storageBucket: "beginning-bjj.firebasestorage.app",
  messagingSenderId: "40594726371",
  appId: "1:40594726371:web:674031d6199088661654d6",
  measurementId: "G-1Z5MK1813E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);