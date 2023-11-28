import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Input from "../UI/Input";
import PrimaryButton from "../UI/PrimaryButton";

const AuthForm = ({ isLogin, onSubmit, credentialIsInvalid }) => {
	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredConfirmEmail, setEnteredConfirmEmail] = useState("");
	const [enteredPassword, setEnteredPassword] = useState("");
	const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

	const {
		email: emailIsInvalid,
		confirmEmail: emailsDontMatch,
		password: passwordIsInvalid,
		confirmPassword: passwordsDontMatch,
	} = credentialIsInvalid;
	function updateInputValueHandler(inputType, enteredValue) {
		switch (inputType) {
			case "email":
				setEnteredEmail(enteredValue);
				break;
			case "confirmEmail":
				setEnteredConfirmEmail(enteredValue);
				break;
			case "password":
				setEnteredPassword(enteredValue);
				break;
			case "confirmPassword":
				setEnteredConfirmPassword(enteredValue);
				break;
		}
	}
	function submitHandler() {
		onSubmit({
			email: enteredEmail,
			confirmEmail: enteredConfirmEmail,
			password: enteredPassword,
			confirmPassword: enteredConfirmPassword,
		});
	}

	return (
		<View style={styles.form}>
			<View>
				<Input
					label="البريد الالكتروني"
					onUpdateValue={updateInputValueHandler.bind(this, "email")}
					value={enteredEmail}
					keyboardType="email-address"
					isInvalid={emailIsInvalid}
				/>
				{!isLogin && (
					<Input
						label="تأكيد البريد الالكتروني"
						onUpdateValue={updateInputValueHandler.bind(this, "confirmEmail")}
						value={enteredConfirmEmail}
						keyboardType="email-address"
						isInvalid={emailsDontMatch}
					/>
				)}
				<Input
					label="كلمة المرور"
					onUpdateValue={updateInputValueHandler.bind(this, "password")}
					value={enteredPassword}
					secure
					isInvalid={passwordIsInvalid}
				/>
				{!isLogin && (
					<Input
						label="تأكيد كلمة المرور"
						onUpdateValue={updateInputValueHandler.bind(
							this,
							"confirmPassword"
						)}
						value={enteredConfirmPassword}
						secure
						isInvalid={passwordsDontMatch}
					/>
				)}
				<View style={styles.buttons}>
					<PrimaryButton onTap={submitHandler}>
						{isLogin ? "تسجيل الدخول" : "إنشاء حساب"}
					</PrimaryButton>
				</View>
			</View>
		</View>
	);
};

export default AuthForm;

const styles = StyleSheet.create({
	buttons: {
		marginTop: 12,
	},
});
