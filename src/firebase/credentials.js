// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADOSh5Hf7XvucJR1iZOv_clndKf0y2g3A",
  authDomain: "rauls-hardware-store.firebaseapp.com",
  projectId: "rauls-hardware-store",
  storageBucket: "rauls-hardware-store.appspot.com",
  messagingSenderId: "755789124845",
  appId: "1:755789124845:web:0bf05ad2e88e2f26da68e4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;