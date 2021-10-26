import firebase, { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCNzcNcLWl7PmHSiFb9D5j3jxaoDnXfb_c",
  authDomain: "sneakers-commerce.firebaseapp.com",
  projectId: "sneakers-commerce",
  storageBucket: "sneakers-commerce.appspot.com",
  messagingSenderId: "547006705448",
  appId: "1:547006705448:web:42cb9a5cf7d977b0d0aa1d",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export default app;
export { auth, provider, signInWithPopup };
