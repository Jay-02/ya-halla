import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../constants/GlobalStyles'
import SecondaryButton from '../components/UI/SecondaryButton'
function ChoiceScreen ({navigation}){
  function choiceOneNavigationHandler(){
    navigation.navigate('DocumentFormScreen')
  }
  return (
    <View style = {styles.rootContainer}>
      <View style = {styles.optionOneContainer}>
        <SecondaryButton style = {styles.text} onTap={choiceOneNavigationHandler}>انشاء وثيقة نقل</SecondaryButton>
      </View>
      <View style = {styles.optionTwoContainer}>
        <SecondaryButton style = {styles.text}>الخيار الثاني</SecondaryButton>
      </View>
    </View>
  )
}

export default ChoiceScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: "row-reverse",
  },
  optionOneContainer: {
    flex :2,
    opacity: 0.9,
    backgroundColor: GlobalStyles.colors.primary,
  },
  optionTwoContainer: {
    flex :2,
    opacity: 0.9,
    backgroundColor: GlobalStyles.colors.accent,
  },
  text: {
    fontFamily: "Almarai-Bold",
    fontSize: 24,
    color: GlobalStyles.colors.text,
    justifyContent: 'center',
    textAlign: 'center'
  }
})