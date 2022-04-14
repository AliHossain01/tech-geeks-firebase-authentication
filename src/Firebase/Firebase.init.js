import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-tWBVT2w3e63qa8yiQcG7ocu37XlaHE0",
  authDomain: "tech-geeks-c882f.firebaseapp.com",
  projectId: "tech-geeks-c882f",
  storageBucket: "tech-geeks-c882f.appspot.com",
  messagingSenderId: "997408545452",
  appId: "1:997408545452:web:95cd395cefd36b1943dd09"
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);

export default firebaseApp;
