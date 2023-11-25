import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons} from "@expo/vector-icons";
import { GlobalStyles } from "../../constants/GlobalStyles";

const IconButton = ({ onTap, name, color })=> {
	return (
		<Pressable onPress={onTap}
        style={({pressed})=> pressed && [styles.pressed, styles.rootContainer]}>
			<View style = {styles.buttonContainer}>
				<Ionicons name={name} color={color} size={24} />
			</View>
		</Pressable>
	);
}

export default IconButton;

const styles = StyleSheet.create({
    rootContainer:{
        backgroundColor: GlobalStyles.accent,
        flex : 1
    },
    buttonContainer:{
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 8,
        marginVertical: 2,
    },
    pressed:{
        opacity:0.75
    }
});
