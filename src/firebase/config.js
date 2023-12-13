
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyBsNkH27S73p2x5cDT9IgJXsPn52zWKRRY",
  authDomain: "bilgiislemdestek-ec846.firebaseapp.com",
  projectId: "bilgiislemdestek-ec846",
  storageBucket: "bilgiislemdestek-ec846.appspot.com",
  messagingSenderId: "363649510325",
  appId: "1:363649510325:web:f4ea7c89626f3ab29807fc"
};

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  const storage=getStorage(app)

  export {db,auth,storage}