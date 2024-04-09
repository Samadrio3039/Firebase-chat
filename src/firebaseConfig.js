// src/firebase.js
import * as firebase from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

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
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export default firebase;
