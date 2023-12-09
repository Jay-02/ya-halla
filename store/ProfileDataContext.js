import { createContext, useState, useEffect } from "react";

export const ProfileDataContext = createContext({
    fullName:'',
    addFullName: ()=>{},
    phoneNumber:'',
    addPhoneNumber:(phoneNumber)=>{},
    profilePictureUri:null,
    addProfilePictureUri:(profilePictureUri)=>{}
    //Nationality?
})
function ProfileDataContextProvider({children}){
    const [name, setName] = useState()
    const [number, setNumber] = useState()
    const [uri, setUri] = useState()
    function addFullName(name){
        setName(name)
    }
    function addPhoneNumber(phoneNumber){
        setNumber(phoneNumber)
    }
    function addProfilePictureUri(profilePictureUri){
        setUri(profilePictureUri)
    }
const value = {
    fullName: name,
    addFullname: addFullName,
    addPhoneNumber: addPhoneNumber,
    phoneNumber:number,
    addProfilePictureUri:addProfilePictureUri,
    profilePictureUri:uri
}
return <ProfileDataContext.Provider value={value}>{children}</ProfileDataContext.Provider>
}
export default ProfileDataContextProvider