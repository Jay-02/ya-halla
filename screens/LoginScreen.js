import React, { useContext, useState } from 'react'
import { Alert, View } from 'react-native'
import LoadingOverlay from '../components/UI/LoadingOverlay' 
import AuthContent from '../components/Authentication/AuthContent';
import { login } from '../helper/auth';
import { AuthContext } from '../store/AuthContext';
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
import { useCallback } from 'react'



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
  
  
  const fontPath = '../assets/fonts/'
  const [fontsLoaded] = useFonts({
      'Almarai-Regular': require( fontPath + 'Almarai-Regular.ttf'),
      'Almarai-Bold': require( fontPath + 'Almarai-Bold.ttf'),
      'Almarai-Light': require( fontPath + 'Almarai-Light.ttf'),
      'Almarai-ExtraBold': require( fontPath + 'Almarai-ExtraBold.ttf'),
      

    })
    const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }, [fontsLoaded]);
  
    if (!fontsLoaded) {
      return null;
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



