import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBafVtTJJaCTLSpptOvK2GKHKhvF62mQ4s",
  authDomain: "chat-380f1.firebaseapp.com",
  projectId: "chat-380f1",
  storageBucket: "chat-380f1.appspot.com",
  messagingSenderId: "663588353853",
  appId: "1:663588353853:web:7a818ad8cedf284c317754",
  measurementId: "G-PJ6TM36621",
};
const fire = firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();

export const auth = firebase.auth();

export default fire;
