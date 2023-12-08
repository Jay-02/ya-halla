import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react';

import { Alert } from 'react-native';
import { storeProfilePicture } from './storage';
export async function pickImage() {


		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			quantity: 1,
			exif:true,
			quality:1,

		});

		if (!result.canceled) {

			 storeProfilePicture(result.assets[0].uri)
			
		} else {
			Alert.alert('no image imported ')
		}
	};