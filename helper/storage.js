import { ref, uploadBytes } from "firebase/storage";
import { auth, storage } from "../firebase-config";

const profilePicFolderRef = ref(storage, `ProfilePictures/${auth.currentUser.uid}`,"image"  )
export function storeProfilePicture(image){

    uploadBytes(profilePicFolderRef, image).then((snapshot)=>{
        console.log("Uploaded")
    })
}