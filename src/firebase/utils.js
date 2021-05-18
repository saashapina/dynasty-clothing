import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDnJ5yC_wP8_nMcCliqhl6v6rhE3zfLLvE",
  authDomain: "dynasty-db.firebaseapp.com",
  projectId: "dynasty-db",
  storageBucket: "dynasty-db.appspot.com",
  messagingSenderId: "1074668166761",
  appId: "1:1074668166761:web:81efef1a19aa7d5d3f4cf8",
  measurementId: "G-8Y887G3MZL",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
