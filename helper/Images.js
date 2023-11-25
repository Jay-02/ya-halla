import * as ImagePicker from 'expo-image-picker'
export const pickImage  = async () => {

		let pickedItem = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			quantity: 1,
		});

		if (!pickedItem.canceled) {
			setImageHandler(pickedItem.assets[0].uri);
			
		}
	};