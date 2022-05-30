// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnw8qACTscLoxow_1_HaDbN8A5n6USAJc",
  authDomain: "manufacturer-website-cli-30218.firebaseapp.com",
  projectId: "manufacturer-website-cli-30218",
  storageBucket: "manufacturer-website-cli-30218.appspot.com",
  messagingSenderId: "1006132131418",
  appId: "1:1006132131418:web:3adf98938af5ba5db10a63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
