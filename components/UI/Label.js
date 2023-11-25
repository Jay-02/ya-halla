import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStyles";

function Label ({ children }) {
	return (
		<View>
			<Text style={styles.text}>{children}</Text>
		</View>
	);
};

export default Label;

const styles = StyleSheet.create({
	text: {
		fontFamily:'Almarai-Bold',
		fontSize: 12,
        fontWeight:"bold",
		color: GlobalStyles.colors.secondary,
		marginBottom: 4,
	},
});
