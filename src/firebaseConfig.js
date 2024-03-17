// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHirepuVp2-m4jRT3vnRPV8hfNsbyYq2E",
  authDomain: "pwa-chat-app-fb.firebaseapp.com",
  projectId: "pwa-chat-app-fb",
  storageBucket: "pwa-chat-app-fb.appspot.com",
  messagingSenderId: "537718220170",
  appId: "1:537718220170:web:5e79c5dedcd7e2f1109473",
  measurementId: "G-R85W0GS5BG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default firebaseConfig