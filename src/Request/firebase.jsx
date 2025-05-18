import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPWvXoKTP4zszpz3fGA1c-jLUte6AOyUg",
  authDomain: "landing-pages-7e570.firebaseapp.com",
  projectId: "landing-pages-7e570",
  storageBucket: "landing-pages-7e570.firebasestorage.app",
  messagingSenderId: "74652268676",
  appId: "1:74652268676:web:dc01bb40a77587a53c6ad1",
  measurementId: "G-MR3CM3JWSR"
};

/*
    ! Hosting
    firebase login
    firebase init
    "site": "netflixmyclone",
    firebase deploy --only hosting:netflixmyclone
*/

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const provider = new GoogleAuthProvider();
export const auth = getAuth();