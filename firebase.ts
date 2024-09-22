// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6zaMcZWOu92JWT8VtvpIztUblb36FGPE",
  authDomain: "fir-f5528.firebaseapp.com",
  projectId: "fir-f5528",
  storageBucket: "fir-f5528.appspot.com",
  messagingSenderId: "655478678018",
  appId: "1:655478678018:web:0cfa90d39a2b356ac87d1b"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth()
const db = getFirestore();
export {app, auth,db}