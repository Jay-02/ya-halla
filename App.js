import { StatusBar } from "expo-status-bar";
import { useContext, useEffect } from "react";
import { StyleSheet } from "react-native";
import { GlobalStyles } from "./constants/GlobalStyles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthContextProvider, { AuthContext } from "./store/AuthContext";
// Screens
import LoginScreen from "./screens/LoginScreen";
import ChoiceScreen from "./screens/ChoiceScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ProfileConfiguration from "./screens/ProfileConfiguration";
// Components
import IconButton from "./components/UI/IconButton";
import AppLoading from 'expo-app-loading'

import {
	useFonts,
	Almarai_300Light,
	Almarai_400Regular,
	Almarai_700Bold,
	Almarai_800ExtraBold,
  } from '@expo-google-fonts/almarai';


const Stack = createNativeStackNavigator();
function UnAuthStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: GlobalStyles.colors.primary,
				},
				headerTintColor: GlobalStyles.colors.text,
				headerTitleAlign: "center",
				headerTitleStyle: {
					fontFamily: GlobalStyles.fonts.bold,
				},
			}}
		>
			<Stack.Screen
				name="LoginScreen"
				component={LoginScreen}
				options={{
					headerTitle: "تسجيل الدخول",
				}}
			/>
			<Stack.Screen
				name="SignUpScreen"
				component={SignUpScreen}
				options={{
					headerTitle: "إنشاء حساب",
				}}
			/>
		</Stack.Navigator>
	);
}
function AuthenticatedStack() {
	const authCtx = useContext(AuthContext);

	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: GlobalStyles.colors.primary,
				},
				headerTintColor: GlobalStyles.colors.text,
				headerTitleAlign: "center",
				headerTitleStyle: {
					fontFamily: GlobalStyles.fonts.bold,
				},
				headerRight: ({ tintColor }) => (
					<IconButton
						name={"exit-outline"}
						color={tintColor}
						onTap={authCtx.logout}
					/>
				),
			}}
		>
			<Stack.Screen
				name="ProfileConfiguration"
				component={ProfileConfiguration}
				options={{
					headerTitle: "المعلومات الشخصية",
					headerTitleAlign: "center",
				}}
			/>
			<Stack.Screen name="ChoiceScreen" component={ChoiceScreen} />
		</Stack.Navigator>
	);
}
function Navigation() {
	const authCtx = useContext(AuthContext);
	return (
		<NavigationContainer>
			{!authCtx.isAuthenticated && <UnAuthStack />}
			{authCtx.isAuthenticated && <AuthenticatedStack />}
		</NavigationContainer>
	);
}
export default function App() {
	let [fontsLoaded] = useFonts({
		Almarai_300Light,
		Almarai_400Regular,
		Almarai_700Bold,
		Almarai_800ExtraBold,
	  });
	  if(!fontsLoaded){
		return <AppLoading/>
	  }
	return (
		<>
			<StatusBar style="auto" />
			<AuthContextProvider>
				<Navigation />
			</AuthContextProvider>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: GlobalStyles.colors.background,
		alignItems: "center",
		justifyContent: "center",
	},
});
