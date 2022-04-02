import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';

const App = () => {
  const [task, setTask] = useState('');
  const [listTask, setListTask] = useState([]);

  const renderTask = () => {
    const data = listTask.filter(task => !task.isDone);
    if (!data.length) {
      return <Text style={styles.nothing}>Chua co viec can lam</Text>;
    }

    return data.map(task => {
      if (!task.isDone) {
        return (
          <TouchableOpacity
            key={task.name}
            style={styles.taskContainer}
            onPress={() => {
              const name = task.name;
              const index = listTask.findIndex(item => item.name === name);
              const newTasks = [...listTask];
              newTasks[index].isDone = true;
              setListTask(newTasks);
            }}>
            <Text style={styles.taskName}>{task.name}</Text>      
          </TouchableOpacity>
        );
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>TODO APP</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setListTask(listTask.concat([{name: task, isDone: false}]));
            setTask('');
          }}>
          <Text style={styles.btnTitle}>+</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
            onChangeText={text => setTask(text)}
            placeholder="Add note"
            style={styles.input}
          />
      </View>
      <Text style={styles.todoTitle}>To do list</Text>
      <View style={styles.taskWrapper}>{renderTask()}
      {listTask.map((task, index) => {
        if (task.isDone) {
          return (
            <TouchableOpacity
              key={task.name}
              style={styles.taskContainer}
              onPress={() => {
                // listTask.splice()
              }}>
              <Text style={styles.taskDone}>{task.name}</Text>
            </TouchableOpacity>
          );
        }
      })}
      </View>
      
    </View>
  );
};

export default App;