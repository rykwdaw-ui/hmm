import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA2PJTCkIl1DehcLLK_Wpy4X-QTVG4ycH0",
  authDomain: "hmm-ecc74.firebaseapp.com",
  projectId: "hmm-ecc74",
  storageBucket: "hmm-ecc74.firebasestorage.app",
  messagingSenderId: "1092745287735",
  appId: "1:1092745287735:web:6e4dbce88f2d7117b507b2",
  measurementId: "G-8V30XE656Y"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

console.log("✅ Firebase Connected");
