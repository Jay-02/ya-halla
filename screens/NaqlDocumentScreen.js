import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import PrimaryButton  from "../components/UI/PrimaryButton";
import ModalComponent from "../components/ModalComponent";
import { pickImage } from "../helper/Images";


function NaqlDocumentScreen() {
	const [visiblity, setVisibility] = useState(false)
	function showModal(){
		setVisibility(true)
	}
	function hideModel(){
		setVisibility(false)
	}
	return (
		<View style={styles.rootContainer}>
			<View>
				<ModalComponent onClose={hideModel} isVisible={visiblity} ButtonTap={pickImage} label={"الصورة المختارة"}/>
			<PrimaryButton onTap={showModal}> عرض الصورة</PrimaryButton>
			</View>
		</View>
	);
};

export default NaqlDocumentScreen;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
	},
});
