// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCQvS121gl_AD4cNQ8XCfwjo4bzgN4xtg",
  authDomain: "email-password-authentic-dcf45.firebaseapp.com",
  projectId: "email-password-authentic-dcf45",
  storageBucket: "email-password-authentic-dcf45.appspot.com",
  messagingSenderId: "792156696632",
  appId: "1:792156696632:web:0bd02a40170971255e36cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app};