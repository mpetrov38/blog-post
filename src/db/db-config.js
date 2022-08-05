import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATJXjQ6g6m6gSTlgGz55TzW2FVyUm-5W4",
  authDomain: "blog-post-483d8.firebaseapp.com",
  projectId: "blog-post-483d8",
  storageBucket: "blog-post-483d8.appspot.com",
  messagingSenderId: "287512289014",
  appId: "1:287512289014:web:8e6835cfe8685c63d2d6d7"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const auth = getAuth(app);
