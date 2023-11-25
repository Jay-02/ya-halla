import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/GlobalStyles"

const PrimaryButton = ({ children, onTap }) => {
	return (
		<View style={styles.outerContainer}>
			<Pressable onPress={onTap} style={({pressed})=> pressed ? [styles.innerContainer, styles.pressed]: styles.innerContainer}>
				<Text style={styles.text}>{children}</Text>
			</Pressable>
		</View>
	);
};

export default PrimaryButton;

const styles = StyleSheet.create({
	outerContainer: {
		minHeight:50,
		minWidth:50,
		backgroundColor: GlobalStyles.colors.accent,
		paddingHorizontal: 8,
		borderRadius: 18,
		elevation: 3,
	},
	innerContainer: {
		flex: 1,
		justifyContent: 'center'
	},
	text: {
	fontFamily:'Almarai-Bold',
	color: GlobalStyles.colors.background,
    alignItems:'center',


	},
  pressed:{
	opacity: 0.75,
	}
});
