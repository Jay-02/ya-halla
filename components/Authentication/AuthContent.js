import { View, Text, Alert, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AuthForm from './AuthForm';
import { GlobalStyles } from '../../constants/GlobalStyles';
import FlatButton from '../../components/UI/FlatButton'

export default function AuthContent({isLogin, onAuthenticate}) {
    const navigation = useNavigation();
    const [credentialIsInvalid, setCredentialsInvalid] = useState({
        email: false,
        password: false,
        confirmEmail: false,
        confirmPassword: false,
    })
    function switchAuthModeHandler(){
        if (isLogin){
            navigation.replace('SignUpScreen')
        } else {
            navigation.replace('LoginScreen')
        }
    }
    function submitHandler (credentials){
        let {email, confirmEmail, password, confirmPassword } = credentials;
        email = email.trim();
        password = password.trim();

        const emailIsValid = email.includes('@');
        const passwordIsValid = password.length > 7;
        const emailsAreEqual = email === confirmEmail;
        const passwordsAreEqual = password === confirmPassword;

        if(!emailIsValid || !passwordIsValid || (!isLogin && (!emailsAreEqual || !passwordsAreEqual))){
            Alert.alert('ادخال خاطئ','الرجاء التأكد من المعلومات المدخلة');
            setCredentialsInvalid({
                email: !emailIsValid,
                confirmEmail:!emailIsValid || !emailsAreEqual,
                password: !passwordIsValid,
                confirmPassword: !passwordIsValid || !passwordsAreEqual,
            })
            return;
        }
        onAuthenticate(email, password)
    }
  return (
    <View>
        <View style = {styles.authContent}>
            <AuthForm
            isLogin={isLogin}
            onSubmit={submitHandler}
            credentialIsInvalid={credentialIsInvalid}
            />
            <View style = {styles.buttons}>
                <FlatButton onPress = {switchAuthModeHandler}>
                    {isLogin ? 'انشاء حساب جديد' : 'العودة الى تسجيل الدخول'}
                </FlatButton>
            </View>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    authContent: {
        marginTop: 64,
        marginHorizontal:32,
        padding: 16,
        borderRadius: 8,
        backgroundColor: GlobalStyles.colors.primary,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
    },
    buttons: {
        marginTop: 8,
    }
})