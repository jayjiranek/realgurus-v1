import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Featured from "./src/screens/Featured";

export default function App() {
	return (
		<View style={styles.appContainer}>
			<Featured />
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		backgroundColor: "#100C08",
		paddingHorizontal: 8,
	},
});
