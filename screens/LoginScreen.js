import React, { useContext, useState } from 'react'
import { Alert, View} from 'react-native'
import LoadingOverlay from '../components/UI/LoadingOverlay' 
import AuthContent from '../components/Authentication/AuthContent';
import { login } from '../helper/auth';
import { AuthContext } from '../store/AuthContext';




const LoginScreen = () => {
  const [isAuthenticating,setIsAuthenticating] = useState(false)

  const AuthCtx=useContext(AuthContext)
  async function loginHandler(email, password){
    setIsAuthenticating(true)
    try{
      const token = await login(email,password)
      AuthCtx.authenticate(token)
    } catch(error){
      Alert.alert("فشلت عملية تسجيل الدخول", "الرجاء المحاولة لاحقًا")
      setIsAuthenticating(false)
    }
  }
  
  if(isAuthenticating){
    return <LoadingOverlay message ={'...جاري تسجيل الدخول'}/>
  }

  
    
  return (
    <>
    <AuthContent isLogin onAuthenticate={loginHandler} />
    </>
  )
}

export default LoginScreen



