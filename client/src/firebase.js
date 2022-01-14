import firebase from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC-w9tcVdZEMvDAUtpP4eIcv6QLHRxPc8Q",
  authDomain: "ecommerce-603f0.firebaseapp.com",
  projectId: "ecommerce-603f0",
  storageBucket: "ecommerce-603f0.appspot.com",
  messagingSenderId: "842122635101",
  appId: "1:842122635101:web:af26211c922acd6d97aab4",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
