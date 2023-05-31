import { useState } from "react";
import {
	Button,
	StyleSheet,
	TextInput,
	View,
	Modal,
	Image,
} from "react-native";

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
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
				<Image
					source={require("../assets/images/goal.png")}
					style={styles.image}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Your goals!"
					onChangeText={goalIputHandler}
					value={enteredGoal}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="ADD" color="#5e0acc" onPress={addGoalHandler} />
					</View>
					<View style={styles.button}>
						<Button title="CANCEL" color="#f31282" onPress={props.onCancel} />
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: "column",
		flex: 1,
		justifyContent: "center",
		padding: 10,
		alignItems: "center",
		backgroundColor: "#311b6b",
	},
	image: {
		width: 100,
		height: 100,
		marginBottom: 10,
	},
	textInput: {
		borderColor: "#e4d0ff",
		backgroundColor: "#e4d0ff",
		color: "#311b6b",
		borderRadius: 10,
		borderWidth: 1,
		width: "100%",
		padding: 10,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "60%",
		marginTop: 10,
	},
	button: {
		width: "40%",
	},
});
