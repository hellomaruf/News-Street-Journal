// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB35GeqBJuNb_lGM_RFYjizBQYPhQqSxQ",
  authDomain: "news-street-journal.firebaseapp.com",
  projectId: "news-street-journal",
  storageBucket: "news-street-journal.appspot.com",
  messagingSenderId: "899798071656",
  appId: "1:899798071656:web:d24fba25f7dcb0a79c7edd",
  measurementId: "G-ZWG0ZG8C9Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);