import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import ToDoForm from './ToDoForm';

export default function App() {
  const [tasks, setTasks] = useState([]);

  // Add task function
  const addTask = (taskText) => {
    if (taskText.trim() === '') return; // Prevent adding empty tasks
    if (tasks.includes(taskText)) return; // Prevent duplicates
    setTasks([...tasks, taskText]); // Add the new task
  };

  return (
    <View style={styles.container}>
      <ToDoForm addTask={addTask} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Text style={styles.task}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 80,
    backgroundColor: '#f8f8f8',
  },
  task: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    fontSize: 16,
  },
});
