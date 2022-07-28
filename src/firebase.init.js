// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL6mWWAneKSNAe5lSrcXVac_Hjs33QaD0",
  authDomain: "connect-zone-2fcef.firebaseapp.com",
  projectId: "connect-zone-2fcef",
  storageBucket: "connect-zone-2fcef.appspot.com",
  messagingSenderId: "53681969072",
  appId: "1:53681969072:web:8f9fe3c797ff0207d8e875"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;