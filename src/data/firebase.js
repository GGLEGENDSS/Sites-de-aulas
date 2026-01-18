import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9kMXGrGw8seEd3cpUoUeDGPh6oxILbek",
  authDomain: "aprendendo-a-coda.firebaseapp.com",
  projectId: "aprendendo-a-coda",
  storageBucket: "aprendendo-a-coda.firebasestorage.app",
  messagingSenderId: "431538392332",
  appId: "1:431538392332:web:ff46c7a6279234cd694d29"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
