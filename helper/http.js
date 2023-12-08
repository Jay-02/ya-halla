import axios from "axios"
import { doc, setDoc } from "firebase/firestore"
import { auth } from "../firebase-config"
import {db} from '../firebase-config'

export async function setProfileData(fullName, phoneNumber){
    const profileData = await setDoc(doc(db, fullName, phoneNumber),{
        fullName:fullName,
        phoneNumber:phoneNumber,
        // nationality:nationality
    })
}