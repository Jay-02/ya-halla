import { createContext, useState, useEffect } from "react";

export const ProfileDataContext = createContext({
    fullName: (fullName)=>{},
    phoneNumber:(phoneNumber)=>{},
    profilePicUri:(profilePicUri)=>{}
    //Nationality?
})
function ProfileDataContextProvider({children}){
    const [name, setName] = useState("")
    const [number, setNumber] = useState()
    const [uri, setUri] = useState()
    function setFullNameHandler(){
        setName(name)
    }
    function setPhoneNumberHandler(){
        setNumber(number)
    }
    function setFullNameHandler(){
        setUri(uri)
    }
const value = {
    fullName: name,
    addFullname: setFullNameHandler,
    addPhoneNumber: setPhoneNumberHandler,
    phoneNumber:number,
    addProfilePictureUri:setUri,
    profilePictureUri:uri
}
}