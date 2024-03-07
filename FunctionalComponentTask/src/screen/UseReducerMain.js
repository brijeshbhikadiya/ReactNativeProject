import { View, Text, TouchableOpacity } from 'react-native'
import React, { createContext, useReducer } from 'react'
import ChildUseReducer from './ChildUseReducer'

// The useReducer Hook is used to store and update states, just like the useState Hook. It accepts a reducer function 
// as its first parameter and the initial state as the second. useReducer returns an array that holds the current state value 
// and a dispatch function to which you can pass an action and later invoke it.

const reducer = ( state = 0 ,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return state+1;
        case 'DECREMENT':
            return state-1;
        default:
            return state;
    }
}

export const MyContext = createContext();

const UseReducerMain = () => {

    const [state,dispatch] = useReducer(reducer,0);
    
  return (
    <MyContext.Provider value={state}>
    <View style={{flex:1,justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
      <TouchableOpacity  style={{
              backgroundColor: 'black',
              paddingVertical: 10,
              paddingHorizontal: 30,
              borderRadius: 15,
              marginHorizontal:20
            }} onPress={()=>{
                dispatch({type:'INCREMENT'})
            }}>
        <Text style={{color: 'white', fontWeight: '600'}}>Increment</Text>
      </TouchableOpacity>
      <ChildUseReducer></ChildUseReducer>
      <TouchableOpacity  style={{
              backgroundColor: 'black',
              paddingVertical: 10,
              paddingHorizontal: 30,
              borderRadius: 15,
              marginHorizontal:20
            }} onPress={()=>{
                dispatch({type:'DECREMENT'})
            }}>
        <Text style={{color: 'white', fontWeight: '600'}}>Decrement</Text>
      </TouchableOpacity>
    </View>
    </MyContext.Provider>
  )
}

export default UseReducerMain