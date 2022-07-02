// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi-5j-lLHxZ53-vCGViaVgW7WHyPAu_pI",
  authDomain: "projectmanagement-85794.firebaseapp.com",
  projectId: "projectmanagement-85794",
  storageBucket: "projectmanagement-85794.appspot.com",
  messagingSenderId: "300453060537",
  appId: "1:300453060537:web:ba856b08b59ecfb6cfa068",
  measurementId: "G-YEPYNGF3ZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);