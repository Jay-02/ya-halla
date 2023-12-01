import { View, StyleSheet } from "react-native";
import Input from "../UI/Input";
import { useState } from "react";
import { GlobalStyles } from "../../constants/GlobalStyles";
import PrimaryButton from "../UI/PrimaryButton";
import { pickImage } from "../../helper/Images";
function ProfileConfigurationForm() {
	const [enteredPhoneNumber, setEnteredPhoneNumber] = useState("");
	function setPhoneNumberHandler(enteredValue) {
		setEnteredPhoneNumber(enteredPhoneNumber);
	}
	return (
		<View>
            <View style = {styles.card}>
			<Input label="الاسم الكامل" keyboardType="default" />
			<Input label="رقم الهاتف"  />
			<PrimaryButton onTap={pickImage}>اختيار صورة شخصية</PrimaryButton>
            </View>


		</View>
	);
}
export default ProfileConfigurationForm;
const styles = StyleSheet.create({
    card: {
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
