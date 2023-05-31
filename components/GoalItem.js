import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem(props) {
	return (
		<View style={styles.goalItem}>
			<Pressable
				android_ripple={{ color: "#dddddd" }}
				onPress={props.onDeleteItem.bind(this, props.id)}>
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
	goalText: {
		padding: 10,
		color: "white",
	},
});
