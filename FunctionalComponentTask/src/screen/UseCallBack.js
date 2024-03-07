import React, { useCallback, useState } from 'react';
import { View, Text, Button } from 'react-native';
import Todos from './Todos';

const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() =>{
    setTodos((t) => [...t, 'New Todo']);
  },[todos]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Todos todos={todos} addTodo={addTodo} />
      <View style={{ marginTop: 20 }}>
        <Text>Count: {count}</Text>
        <Button title="+" onPress={increment} />
      </View>
    </View>
  );
};

export default UseCallBack;

//Book Ma Vachvu No Khbar Pade to