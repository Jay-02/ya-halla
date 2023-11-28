import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../Input'
import { GlobalStyles } from '../../../constants/GlobalStyles'

function DriverDataForm() {
    const [inputValues, setInputValues]= useState({
        fieldOne:'',
    })
    function inputChangedHandler(inputIdentifier, enteredValue){
        setInputValues((curInputs)=>{
            return{
                ...curInputs,
            [inputIdentifier]:enteredValue
        }
    })
    }
  return (
    <View style={styles.rootContainer}>
    <View style = {styles.container}>
      <Input
        style = {styles.inputField} 
        label='placeholder'
        textInputConfig={{
            keyboardType :'decimal-pad',
            placeholder: 'text',
            onChangeText: inputChangedHandler.bind(this, 'fieldOne'),
            value:inputValues.fieldOne
             
        }}

      />
      </View>
    </View>
  )
}

export default DriverDataForm

const styles = StyleSheet.create({
  rootContainer:{
    flex: 1
  },
    container:{
      minHeight:100,
      margin: 4,
      padding:12
    },
    inputField:{
      flex: 1,
    },
})