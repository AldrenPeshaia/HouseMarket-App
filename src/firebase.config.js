import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxSiwv2OSRv2E3Mvkul4vq6GUPMQIT6EY",
  authDomain: "house-marketplace-app-ec98e.firebaseapp.com",
  projectId: "house-marketplace-app-ec98e",
  storageBucket: "house-marketplace-app-ec98e.appspot.com",
  messagingSenderId: "463580050477",
  appId: "1:463580050477:web:211e250182c908588034a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
