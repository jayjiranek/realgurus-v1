import { useState } from "react";
import {
	StyleSheet,
	View,
	Image,
	Text,
	Button,
	TouchableOpacity,
} from "react-native";

import CategoriesSection from "../components/CategoriesSection";

function Featured() {
	const [allCategoryModalIsVisible, setAllCategoryModalIsVisible] =
		useState(false);

	function startAllCategoriesModule() {
		setAllCategoryModalIsVisible(true);
	}

	function endAllCategoriesModule() {
		setAllCategoryModalIsVisible(false);
	}

	return (
		<View style={styles.pageContainer}>
			<View style={styles.crownTopLogoContainer}>
				<Image
					style={styles.crownTopLogo}
					source={require("../assets/images/crown.png")}
				/>
			</View>
			<View>
				<View style={styles.categoriesHeaderContainer}>
					<Text style={styles.sectionHeaderText}>Categories</Text>
					<TouchableOpacity style={styles.moreCategoriesButton}>
						<Text
							style={styles.buttonText}
							onPress={startAllCategoriesModule}
						>
							See all
						</Text>
						<CategoriesSection
							visible={allCategoryModalIsVisible}
							onBack={endAllCategoriesModule}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

export default Featured;

const styles = StyleSheet.create({
	pageContainer: {
		flex: 1,
	},
	crownTopLogoContainer: {
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		borderBottomWidth: 1,
		borderBlockColor: "#333333",
	},
	crownTopLogo: {
		width: 80,
		height: 55,
		marginBottom: 16,
	},
	categoriesContainer: {},
	categoriesHeaderContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		margin: 16,
	},
	sectionHeaderText: {
		color: "#F9F6EE",
		fontFamily: "Cochin",
		fontSize: 30,
		fontWeight: "bold",
	},
	moreCategoriesButton: {
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		color: "#0E4D92",
	},
});
