import { ref, uploadBytes } from "firebase/storage";
import { auth, storage } from "../firebase-config";

const profilePicFolderRef = ref(storage, `ProfilePictures/${auth?.currentUser?.uid}`,"image"  )
export async function storeProfilePicture(uri, fileType){
    const response = await fetch(uri)
    const blob = await response.blob()
    const uploadTask = uploadBytes(profilePicFolderRef, blob)
    }
