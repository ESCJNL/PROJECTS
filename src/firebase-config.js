import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth , GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAS2lPqD8FrlWemL3w5rc7FVHKmFtFRaiY",
    authDomain: "login-auth-13f47.firebaseapp.com",
    projectId: "login-auth-13f47",
    storageBucket: "login-auth-13f47.appspot.com",
    messagingSenderId: "26614099518",
    appId: "1:26614099518:web:f8d5871ab9d75d4014eb6f"
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app);
export const provider =new GoogleAuthProvider()