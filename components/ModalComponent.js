import { StyleSheet, Text, View, Modal } from "react-native";
import React from "react";
import  {GlobalStyles}  from "../constants/GlobalStyles";
import  IconButton  from "./UI/IconButton";
import Label  from './UI/Label'
import PrimaryButton from "./UI/PrimaryButton";

const ModalComponent = ({ isVisible, onClose, children, ButtonTap, label })=> {
	return (
		
		<Modal animationType="slide" transparent={false} visible={isVisible}>
			<View style={styles.modalContent}>
				<View style={styles.labelContainer}>
					<Label>{label}</Label>
					<IconButton
						name={"close"}
						color={"#272727"}
						onTap={onClose}
					/>
				</View>
				<View style={styles.chidrenContainer}>
					{children}
				</View>
			</View>
		</Modal>
		
	);
}

export default ModalComponent;

const styles = StyleSheet.create({
	modalContent: {
		height: '98%',
		width: '100%',
		borderTopRightRadius: 18,
		borderTopLeftRadius: 18,
		position: 'absolute',
		bottom:0
	},
	labelContainer:{
		height: '4%',
		backgroundColor: GlobalStyles.colors.accent,
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		paddingHorizontal:20,
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'center',
	},
	label:{
		color:GlobalStyles.colors.text,
		fontFamily: 'Almarai-Bold',
		fontSize:24,
		
	}
});
