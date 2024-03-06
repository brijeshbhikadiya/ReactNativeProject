import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

const FunctionComponentUseEffect = () => {
    
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("Use Effect Called 1")
    })

    useEffect(()=>{
        console.log("Use Effect Called 2")
    },[])

    useEffect(()=>{
        console.log("Use Effect Called 3")
    },[count])


  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:30,color:'red',marginBottom:20}}>Use Effect Demo</Text>
      <TouchableOpacity onPress={()=>setCount(count+1)} style={{backgroundColor:'black',borderRadius:15,paddingHorizontal:20,paddingVertical:10}}>
        <Text style={{color:'white',fontWeight:'600'}}>Increase</Text>
      </TouchableOpacity>
      <Text style={{color:'black',fontWeight:'700',marginTop:10}}>{count}</Text>
      <TouchableOpacity onPress={()=>count>0?setCount(count-1):null} style={{backgroundColor:'black',borderRadius:15,paddingHorizontal:20,paddingVertical:10,marginTop:10}}>
        <Text style={{color:'white',fontWeight:'600'}}>Decrease</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>Alert.alert("Only Click")} style={{backgroundColor:'black',borderRadius:15,paddingHorizontal:20,paddingVertical:10,marginTop:10}}>
        <Text style={{color:'white',fontWeight:'600'}}>Only Click</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FunctionComponentUseEffect