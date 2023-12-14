
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyDGKYtOt2-F2Zoe-LKPdJ6jCt7NC_tqLFw",
  authDomain: "lhuportaldb.firebaseapp.com",
  projectId: "lhuportaldb",
  storageBucket: "lhuportaldb.appspot.com",
  messagingSenderId: "633825545622",
  appId: "1:633825545622:web:60a306f51928951c3661b7"
};

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  const storage=getStorage(app)

  export {db,auth,storage}