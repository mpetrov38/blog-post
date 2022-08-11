import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfdkW_d20QfwZClg9ZK-cA8Jjz29otiec",
  authDomain: "blog-post-f50c3.firebaseapp.com",
  projectId: "blog-post-f50c3",
  storageBucket: "blog-post-f50c3.appspot.com",
  messagingSenderId: "2713482744",
  appId: "1:2713482744:web:53da5301eaf0872b18920d"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const auth = getAuth(app);
