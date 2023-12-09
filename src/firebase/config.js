
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAksmPveyQwDEVuo5yo9IPC3pssRNpR7fE",
    authDomain: "lhu-portal.firebaseapp.com",
    projectId: "lhu-portal",
    storageBucket: "lhu-portal.appspot.com",
    messagingSenderId: "111989455426",
    appId: "1:111989455426:web:305f45558713b2f7964bdb"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  export {db,auth}