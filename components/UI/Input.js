import { StyleSheet, Text, TextInput, View } from 'react-native'
import { GlobalStyles } from '../../constants/GlobalStyles';


function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}) {
  return (
    <View style = {styles.inputContainer}>
        <Text style = {[styles.label, isInvalid && styles.labelInvalid]}>
            {label}
        </Text>
        <TextInput
            style = {[styles.input, isInvalid && styles.inputInvalid]}
            autoCapitalize='none'
            keyboardType={keyboardType}
            secureTextEntry = {secure}
            onChangeText={onUpdateValue}
            value={value}
        />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.text,
    marginBottom: 4,
  },
  labelInvalid:{
    color: GlobalStyles.colors.error100,
  },
  input: {
    backgroundColor: GlobalStyles.colors.secondary,
    color: GlobalStyles.colors.text,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputInvalid: {
    backgroundColor: GlobalStyles.colors.error100
  },
})
