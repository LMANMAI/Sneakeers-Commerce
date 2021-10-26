import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.PROCESS_API_KEY,
  authDomain: process.env.PROCESS_AUTH_DOMAIN,
  projectId: process.env.PROCESS_PROYECT_ID,
  storageBucket: process.env.PROCESS_STORAGE_BUCKET,
  messagingSenderId: process.env.PROCESS_MESSAGING_SENDER_ID,
  appId: process.env.PROCESS_APP_ID,
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
export default app;
