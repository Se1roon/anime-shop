import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUXaA7Ib_qREQ5qCE9x0saYe9Ufy9B9Q0",
  authDomain: "anime-shop-d9b18.firebaseapp.com",
  projectId: "anime-shop-d9b18",
  storageBucket: "anime-shop-d9b18.appspot.com",
  messagingSenderId: "492898146564",
  appId: "1:492898146564:web:bf14362111528bcd27d851",
  measurementId: "G-92D6RP3KRD",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
