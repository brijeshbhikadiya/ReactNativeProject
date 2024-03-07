import { View, Text, TouchableOpacity } from 'react-native'
import React, { useMemo, useState } from 'react'

// useMemo is used to memoize values or computations, helping to optimize expensive calculations or data transformations.
// useCallback is used to memoize callback functions, reducing unnecessary re-creation of functions and optimizing component re-renders.

const UseMemo = () => {
    const [counter1,setCounter1] = useState(0);
    const [counter2,setCounter2] = useState(0);

    const increseCounter1 = useMemo(()=>{
        console.log('Function 1 Called')
        return counter1*2;
    },[counter1]);

    
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>{increseCounter1}</Text>
        <Text>{counter2}</Text>
        <TouchableOpacity  style={{
              backgroundColor: 'black',
              paddingVertical: 10,
              paddingHorizontal: 30,
              borderRadius: 15,
              marginHorizontal:20,
              marginVertical:10
            }} onPress={()=>setCounter1(counter1+1)}>
            <Text style={{color: 'white', fontWeight: '600'}}>Counter1</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={{
              backgroundColor: 'black',
              paddingVertical: 10,
              paddingHorizontal: 30,
              borderRadius: 15,
              marginHorizontal:20
            }} onPress={()=>setCounter2(counter2+1)}>
            <Text style={{color: 'white', fontWeight: '600'}}>Counter2</Text>
        </TouchableOpacity>
      
    </View>
  )
}

export default UseMemo