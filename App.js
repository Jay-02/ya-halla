import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { StyleSheet} from "react-native";
import { GlobalStyles } from "./constants/GlobalStyles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthContextProvider, { AuthContext } from "./store/AuthContext";
// Screens
import LoginScreen from "./screens/LoginScreen";
import ChoiceScreen from "./screens/ChoiceScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ProfileConfiguration from "./screens/ProfileConfiguration";


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
					fontWeight: "bold",
				},
			}}
		>
			<Stack.Screen
				name="LoginScreen"
				component={LoginScreen}
				options={{
					headerTitle: "تسجيل الدخول",
					headerTitleAlign: "center",
				}}
			/>
			<Stack.Screen
				name="SignUpScreen"
				component={SignUpScreen}
				options={{
					headerTitle: "إنشاء حساب",
					headerTitleAlign: "center",
				}}
			/>
		</Stack.Navigator>
	);
}
function AuthenticatedStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: GlobalStyles.colors.primary,
				},
				headerTintColor: GlobalStyles.colors.text,
				headerTitleAlign: "center",
				headerTitleStyle: {
					fontWeight: "bold",
				},
			}}
		>
			<Stack.Screen name="ProfileConfiguration" component={ProfileConfiguration} />
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
