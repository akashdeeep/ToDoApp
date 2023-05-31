import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem(props) {
	return (
		<View style={styles.goalItem}>
			<Pressable
				android_ripple={{ color: "#210644" }}
				onPress={props.onDeleteItem.bind(this, props.id)}
				style={({ pressed }) => pressed && styles.pressedItem}>
				<Text style={styles.goalText}>{props.text}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	goalItem: {
		marginVertical: 10,
		borderRadius: 10,
		backgroundColor: "#5e0acc",
		borderColor: "black",
		borderWidth: 1,
	},
	pressedItem: {
		// backgroundColor: "#210644",
		opacity: 0.5,
	},

	goalText: {
		padding: 10,
		color: "white",
	},
});
