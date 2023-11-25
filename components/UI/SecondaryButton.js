import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constants/GlobalStyles'

function SecondaryButton ({children, onTap}){
  return (
    <View style={styles.outerContainer}>
			<Pressable onPress={onTap} style={({pressed})=> pressed ? [styles.innerContainer, styles.pressed]: styles.innerContainer}>
				<Text style={styles.text}>{children}</Text>
			</Pressable>
		</View>
  )
}

export default SecondaryButton

const styles = StyleSheet.create({
    outerContainer: {
		flex:1,
		padding: 8,
	},
	innerContainer: {
		flex: 1,
        alignItems: 'center',
        justifyContent:'center'
        
	},
	text: {
	fontFamily:'Almarai-Bold',
	color: GlobalStyles.colors.background,
    alignItems:'center',

	},
  pressed:{ opacity: 0.75}
})