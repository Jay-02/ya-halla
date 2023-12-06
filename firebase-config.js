// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDNdHEuzsoagNHD8xQRxWhQvhsvQs57cJU",
  authDomain: "ya-halla-db.firebaseapp.com",
  databaseURL: "https://ya-halla-db-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ya-halla-db",
  storageBucket: "ya-halla-db.appspot.com",
  messagingSenderId: "907312583448",
  appId: "1:907312583448:web:3396bacde6b1583fa9c46d"
};


const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db = getFirestore(app);
export const storage = getStorage(app);
