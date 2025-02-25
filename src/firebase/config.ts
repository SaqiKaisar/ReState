import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLSPdcUEGzT91ajqL46xxo5EXzg88Dhqk",
  authDomain: "restate-2ec6d.firebaseapp.com",
  projectId: "restate-2ec6d",
  storageBucket: "restate-2ec6d.firebasestorage.app",
  messagingSenderId: "255101208907",
  appId: "1:255101208907:web:9965443aa854a6bc02c0ce",
  measurementId: "G-QX4EE3JNW2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export { app, auth };
