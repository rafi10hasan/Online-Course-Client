// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCefILL68x8O3Vx1mvRk2-OBYb20m-GRuE",
  authDomain: "course-hub-platform.firebaseapp.com",
  projectId: "course-hub-platform",
  storageBucket: "course-hub-platform.appspot.com",
  messagingSenderId: "551781757055",
  appId: "1:551781757055:web:41d459f424af725a910f4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;