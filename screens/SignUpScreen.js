import { View, StyleSheet, Alert } from "react-native";
import LoadingOverlay from '../components/UI/LoadingOverlay'
import { useContext, useState } from "react";
import { createUser } from "../helper/auth";
import AuthContent from '../components/Authentication/AuthContent';
import { AuthContext } from "../store/AuthContext";


const SignUpScreen = () => {

    const [isAuthenticating, setIsAuthenticating] = useState(false)
    const AuthCtx = useContext(AuthContext);

    async function signupHandler(email, password){
        setIsAuthenticating(true)
        try{
            const token = await createUser( email, password)
            AuthCtx.authenticate(token)
        } catch(error){
            Alert.alert('فشلت العملية', 'الرجاء المحاولة لاحقًا')
            setIsAuthenticating(false)
        }

    }
    if(isAuthenticating){
        return <LoadingOverlay message={"جاري انشاء الحساب"}/>
    }
return (
    <AuthContent onAuthenticate={signupHandler} />
    )
}

export default SignUpScreen;

const styles = StyleSheet.create({

})