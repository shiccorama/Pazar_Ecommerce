// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4fAzVxEcO6VYUPhPdI6kJh1eJ0IOYZAo",
  authDomain: "myfirsttest-772d1.firebaseapp.com",
  projectId: "myfirsttest-772d1",
  storageBucket: "myfirsttest-772d1.appspot.com",
  messagingSenderId: "867712881585",
  appId: "1:867712881585:web:588bd5fa04c7b9f43b2390",
  measurementId: "G-7FP8FWJ64R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);