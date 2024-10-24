// Import the functions you need from the Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClzeymR4EUfNRztyjvyPlhcuz2RMNiDE0",
  authDomain: "woo-consolidated.firebaseapp.com",
  projectId: "woo-consolidated",
  storageBucket: "woo-consolidated.appspot.com",
  messagingSenderId: "593730434028",
  appId: "1:593730434028:web:b35c46dd946941898b86c9",
  measurementId: "G-VR9WHYVQGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
