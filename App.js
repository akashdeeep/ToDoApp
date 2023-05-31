import { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	ScrollView,
	FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
	const [goals, setGoals] = useState([]);

	function addGoalHandler(enteredGoal) {
		setGoals((currentGoals) => [
			...currentGoals,
			{ text: enteredGoal, key: Math.random().toString() },
		]);
	}

	deleteGoalHandler = (goalKey) => {
		setGoals((currentGoals) => {
			return currentGoals.filter((goal) => goal.key !== goalKey);
		});
	};

	return (
		<View style={styles.appContainer}>
			<GoalInput onAddGoal={addGoalHandler} />
			<View style={styles.goalContainer}>
				<FlatList
					data={goals}
					renderItem={(itemData) => {
						return (
							<GoalItem
								text={itemData.item.text}
								id={itemData.item.key}
								onDeleteItem={deleteGoalHandler}
							/>
						);
					}}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 30,
	},
	goalContainer: {
		flex: 5,
		// padding: 10,
		// marginVertical: 10,
		// backgroundColor: "#ccc",
		// borderColor: "black",
		// borderWidth: 1,
	},
	goalItem: {
		padding: 10,
		marginVertical: 10,
		borderRadius: 10,
		backgroundColor: "#5e0acc",
		borderColor: "black",
		borderWidth: 1,
	},
	goalText: {
		color: "white",
	},
});
