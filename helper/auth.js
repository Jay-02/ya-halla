import axios from 'axios';
import {auth} from '../firebase-config'
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from 'firebase/auth';
const API_KEY = 'AIzaSyDNdHEuzsoagNHD8xQRxWhQvhsvQs57cJU';



export async function createUser(email, password) {
    createUserWithEmailAndPassword(auth, email, password).then((userCridential)=>{
    const user = userCridential.user
   }).catch((error)=>{
    const errorCode = error.code;
    const errorMessage = error.message
   })
   return (await auth.currentUser.getIdTokenResult()).token
}

export async function login(email, password) {
   signInWithEmailAndPassword(auth, email,password).then((userCredential) => {
    
    const user = userCredential.user;
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  return (await auth.currentUser.getIdTokenResult()).token
}