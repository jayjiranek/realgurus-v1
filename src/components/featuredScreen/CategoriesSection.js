import { View, Text, StyleSheet, Modal } from "react-native";

const categories = [
	{ id: "001", title: "Development" },
	{ id: "002", title: "Business" },
	{ id: "003", title: "Finance & Accounting" },
	{ id: "004", title: "IT & Software" },
	{ id: "005", title: "Design" },
	{ id: "006", title: "Marketing" },
	{ id: "007", title: "Lifestyle" },
	{ id: "008", title: "Health & Fitness" },
	{ id: "009", title: "Music" },
	{ id: "010", title: "Lifestyle" },
];

function CategoriesSection(props) {
	return (
		<Modal animationType='slide'>
			<View>
				<Text>Categories</Text>
			</View>
		</Modal>
	);
}
