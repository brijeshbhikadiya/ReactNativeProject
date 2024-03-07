import React from 'react';
import { View, Text, Button } from 'react-native';

const Todos = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <View>
      <Text style={{ fontSize: 24 }}>My Todos</Text>
      {todos.map((todo, index) => {
        return <Text key={index}>{todo} {index}</Text>;
      })}
      <Button title="Add Todo" onPress={addTodo} />
    </View>
  );
};

export default React.memo(Todos);