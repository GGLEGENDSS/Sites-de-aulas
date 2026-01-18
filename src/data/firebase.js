import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCW2j2Yr-AzA-eLrL4N01d2zBIC_PXvcko",
  authDomain: "flutter-ai-playground-f021c.firebaseapp.com",
  projectId: "flutter-ai-playground-f021c",
  storageBucket: "flutter-ai-playground-f021c.firebasestorage.app",
  messagingSenderId: "751993855548",
  appId: "1:751993855548:web:b2ad2c6cfb50dc483e2d39",
  measurementId: "G-849V5PP51E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics
const analytics = getAnalytics(app);

// Initialize Firebase Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Export app and analytics for use in other parts of the app
export { app, analytics };
