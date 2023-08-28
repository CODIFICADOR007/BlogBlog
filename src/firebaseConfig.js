import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcLtygmKs83ahmhpxIr0wGvLE_Zhn7eps",
  authDomain: "bloger-92649.firebaseapp.com",
  projectId: "bloger-92649",
  storageBucket: "bloger-92649.appspot.com",
  messagingSenderId: "1058102243205",
  appId: "1:1058102243205:web:1853920abbc767f4025eec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app); // export to be used in other files
export const db = getFirestore(app);
export const auth =getAuth(app);