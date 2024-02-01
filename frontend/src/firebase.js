// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIb0zgjkZnGFeEMIrxb9kfrYGV7Oy80Ys",
  authDomain: "dragon-fruit---hackathon.firebaseapp.com",
  projectId: "dragon-fruit---hackathon",
  storageBucket: "dragon-fruit---hackathon.appspot.com",
  messagingSenderId: "409197846164",
  appId: "1:409197846164:web:a71879c1dc633e85c39e81",
  measurementId: "G-WB5385HPXD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
export default app;
