import { View, StyleSheet } from "react-native";
import Input from "../UI/Input";
import { useState } from "react";
import { GlobalStyles } from "../../constants/GlobalStyles";
import PrimaryButton from "../UI/PrimaryButton";
import { pickImage } from "../../helper/Images";
import { useNavigation } from '@react-navigation/native'
import {setProfileData} from '../../helper/http'
import { storeProfilePicture } from "../../helper/storage";

function ProfileConfigurationForm() {
	const navigation = useNavigation()
	const [enteredPhoneNumber, setEnteredPhoneNumber] = useState("");
	const [enteredName, setEnteredName] = useState("");
	const updateInputValueHandler = (inputType, enteredValue)=> {
		switch (inputType) {
			case "name":
				setEnteredName(enteredValue);
				break;
			case "phoneNumber":
				setEnteredPhoneNumber(enteredValue);
				break;
		}
	}
	async function submitHandler(){
		await setProfileData(enteredName, enteredPhoneNumber)
		await storeProfilePicture(pickImage)
		const navigateToChoice = ()=>{
			navigation.navigate('ChoiceScreen')
		}
		navigateToChoice()
	}
	return (
		<View>
			<View style={styles.card}>
				<Input
					label="الاسم الكامل"
					keyboardType="default"
					value={enteredName}
					onUpdateValue={updateInputValueHandler.bind(this, "name")}
				/>
				<Input
					label="رقم الهاتف"
					value={enteredPhoneNumber}
					onUpdateValue={updateInputValueHandler.bind(this, "phoneNumber")}
                    keyboardType={"number-pad"}
				/>
				<PrimaryButton onTap={pickImage}>اختيار صورة شخصية</PrimaryButton>
				<View style={styles.submitButtonContainer}>
					<PrimaryButton onTap={submitHandler}> استمرار</PrimaryButton>
				</View>
			</View>
		</View>
	);
}
export default ProfileConfigurationForm;
const styles = StyleSheet.create({
	card: {
		marginTop: 64,
		marginHorizontal: 32,
		padding: 16,
		borderRadius: 8,
		backgroundColor: GlobalStyles.colors.primary,
		elevation: 2,
		shadowColor: "black",
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.35,
		shadowRadius: 4,
	},
	buttons: {
		marginTop: 16,
	},
	submitButtonContainer: {
		marginTop: 36,
		// width: "50%",
	},
});
