import { View } from "react-native";
import Input from "../UI/Input";
import { useState } from "react";
import PhoneInput from 'react-native-phone-input'

function ProfileConfigurationForm() {
	const [enteredPhoneNumber, setEnteredPhoneNumber] = useState("");
	function setPhoneNumberHandler(enteredValue) {
		setEnteredPhoneNumber(enteredPhoneNumber);
	}
	return (
		<View>
            <View>
			<Input label="الاسم الكامل" keyboardType="default" />
            </View>
            <View>
				<PhoneInput ref={enteredPhoneNumber}/>
            </View>


		</View>
	);
}
export default ProfileConfigurationForm;
