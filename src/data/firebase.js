import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCW2j2Yr-AzA-eLrL4N01d2zBIC_PXvcko",
  authDomain: "flutter-ai-playground-f021c.firebaseapp.com",
  projectId: "flutter-ai-playground-f021c",
  storageBucket: "flutter-ai-playground-f021c.firebasestorage.app",
  messagingSenderId: "751993855548",
  appId: "1:751993855548:web:b2ad2c6cfb50dc483e2d39"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
