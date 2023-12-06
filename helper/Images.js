import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react';
import { storeUserInfo } from './http';
import { Alert } from 'react-native';
export const pickImage  = async () => {
	const [image, setImage] = useState(null)
	function storeImage(image){
		storeUserInfo(image)
	}
	function setImageHandler(image){
		setImage(image)
	}

		let pickedItem = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			quantity: 1,
		});

		if (!pickedItem.canceled) {
			setImageHandler(pickedItem.assets[0].uri);
			
		} else {
			Alert.alert('no image imported ')
		}
		storeImage(image)
	};