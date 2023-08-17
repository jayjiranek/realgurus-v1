import {
	View,
	Text,
	StyleSheet,
	Modal,
	TouchableOpacity,
	Image,
} from "react-native";

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
		<Modal
			visible={props.visible}
			animationType='slide'
		>
			<View style={styles.categoryModuleContainer}>
				<TouchableOpacity onPress={props.onBack}>
					<Image
						style={styles.backIcon}
						source={require("../assets/images/backIcon.png")}
					/>
				</TouchableOpacity>
				<Text style={styles.headerText}>Categories</Text>
			</View>
		</Modal>
	);
}

export default CategoriesSection;

const styles = StyleSheet.create({
	categoryModuleContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
		backgroundColor: "#100C08",
	},
	backIcon: {
		width: 24,
		height: 24,
		marginBottom: 8,
	},
	headerText: {
		color: "#F9F6EE",
		fontFamily: "Cochin",
		fontSize: 40,
		fontWeight: "bold",
		margin: 16,
	},
});
