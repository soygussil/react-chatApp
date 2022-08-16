// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOD_T-CEC5LMgs2sZoHjuXIZ_lWOoJx6U",
  authDomain: "react-chat-c140f.firebaseapp.com",
  projectId: "react-chat-c140f",
  storageBucket: "react-chat-c140f.appspot.com",
  messagingSenderId: "606088172800",
  appId: "1:606088172800:web:3eb0eab3d573d4626f0fe5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
