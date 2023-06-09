// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID

  // apiKey: "AIzaSyANcPrVyPTfaAKV75gFSlU1M8cBKcavgxg",
  // authDomain: "a12-summer-camp.firebaseapp.com",
  // projectId: "a12-summer-camp",
  // storageBucket: "a12-summer-camp.appspot.com",
  // messagingSenderId: "846200067576",
  // appId: "1:846200067576:web:a01aea8194d925761d320d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;