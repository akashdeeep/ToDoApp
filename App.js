import { useState } from "react";
import { StatusBar } from "expo-status-bar";
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
	const [modalsVisible, setModalsVisible] = useState(false);
	const [goals, setGoals] = useState([]);

	function startAddGoalHandler() {
		setModalsVisible(true);
	}

	function cancelGoalAddHandler() {
		setModalsVisible(false);
	}

	function addGoalHandler(enteredGoal) {
		setGoals((currentGoals) => [
			...currentGoals,
			{ text: enteredGoal, key: Math.random().toString() },
		]);
		setModalsVisible(false);
	}
	function endAddGoalHandler() {
		setModalsVisible(false);
	}

	deleteGoalHandler = (goalKey) => {
		setGoals((currentGoals) => {
			return currentGoals.filter((goal) => goal.key !== goalKey);
		});
	};

	return (
		<>
			<StatusBar style="light" />
			<View style={styles.appContainer}>
				<Button
					title="Add New Goal"
					color="#500acc"
					onPress={startAddGoalHandler}
				/>

				{modalsVisible && (
					<GoalInput
						visible={modalsVisible}
						onAddGoal={addGoalHandler}
						onCancel={endAddGoalHandler}
					/>
				)}
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
		</>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 30,
		backgroundColor: "#311b6b",
	},
	goalContainer: {
		flex: 5,
		// padding: 10,
		// marginVertical: 10,
		// backgroundColor: "#ccc",
		// borderColor: "black",
		// borderWidth: 1,
	},
});
