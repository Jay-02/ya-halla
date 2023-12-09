import { View, StyleSheet } from "react-native";
import Input from "../UI/Input";
import { useState } from "react";
import { GlobalStyles } from "../../constants/GlobalStyles";
import PrimaryButton from "../UI/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import { setProfileData } from "../../helper/http";
import { storeProfilePicture } from "../../helper/storage";
import { useContext } from "react";
import * as ImagePicker from "expo-image-picker";

import ProfileDataContextProvider, {
	ProfileDataContext,
} from "../../store/ProfileDataContext";

function ProfileConfigurationForm() {
	const ProfileDataCtx = useContext(ProfileDataContext);
	const navigation = useNavigation();
	const [enteredPhoneNumber, setEnteredPhoneNumber] = useState("");
	const [enteredName, setEnteredName] = useState("");
	const [uri, setUri] = useState('')
	const updateInputValueHandler = (inputType, enteredValue) => {
		switch (inputType) {
			case "name":
				setEnteredName(enteredValue);
				break;
			case "phoneNumber":
				setEnteredPhoneNumber(enteredValue);
				break;
		}
	};

	async function pickImage() {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			quantity: 1,
			exif: true,
			quality: 1,
		});

		if (!result.canceled) {
			setUri(result.assets[0].uri)
		} else {
			Alert.alert("no image imported ");
		}
	}
	async function submitHandler() {
		try{
			storeProfilePicture(uri)
			ProfileDataCtx.addProfilePictureUri(uri);
			ProfileDataCtx.addFullName(enteredName)
			ProfileDataCtx.addPhoneNumber(enteredPhoneNumber)
			await setProfileData(enteredName, enteredPhoneNumber);
			
		
			const navigateToChoice = () => {
				navigation.replace("ChoiceScreen");
			};
			navigateToChoice();
		} catch(error){
			console.error(error);
		}
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
