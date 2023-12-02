import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react';
import { storeUserInfo } from './http';
export const pickImage  = async () => {
	// const [image, setImage] = useState({})
	// function setImageHandler(image){
	// 	setImage(image)
	// }

		let pickedItem = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			quantity: 1,
		});

		if (!pickedItem.canceled) {
			setImageHandler(pickedItem.assets[0].uri);
			// storeUserInfo(pickedItem.assets[0].uri)
			
		}
	};