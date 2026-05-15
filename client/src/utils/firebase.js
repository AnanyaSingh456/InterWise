import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interwise-bf207.firebaseapp.com",
  projectId: "interwise-bf207",
  storageBucket: "interwise-bf207.firebasestorage.app",
  messagingSenderId: "629943805898",
  appId: "1:629943805898:web:5f6c22ffa0bcd079c2d133"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}