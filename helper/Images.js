import * as ImagePicker from 'expo-image-picker'
import { useContext, useState } from 'react';

import { Alert } from 'react-native';
import { storeProfilePicture } from './storage';
import { ProfileDataContext } from '../store/ProfileDataContext';

export async function pickImage() {

		const profileDataCtx =useContext(ProfileDataContext)

		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			quantity: 1,
			exif:true,
			quality:1,

		});

		if (!result.canceled) {
			
			 const image = (result.assets[0].uri).then((image)=>{
			profileDataCtx.addProfilePictureUri(image)

			 })
			 
			} else {
				Alert.alert('no image imported ')
			}
	};