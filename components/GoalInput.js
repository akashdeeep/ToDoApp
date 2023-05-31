import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default GoalInput = (props) => {
	const [enteredGoal, setEnteredGoal] = useState("");

	function goalIputHandler(enteredText) {
		setEnteredGoal(enteredText);
	}
	addGoalHandler = () => {
		props.onAddGoal(enteredGoal);
		setEnteredGoal("");
	};

	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.textInput}
				placeholder="Your goals!"
				onChangeText={goalIputHandler}
				value={enteredGoal}
			/>
			<Button title="ADD" onPress={addGoalHandler} />
		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: "row",
		flex: 1,
		justifyContent: "space-between",
		alignItems: "center",
	},
	textInput: {
		width: "80%",
		padding: 10,
	},
});
