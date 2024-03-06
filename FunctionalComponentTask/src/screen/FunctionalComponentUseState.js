import {View, Text, TouchableOpacity,StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';

const FunctionalComponentUseState = () => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    setCount(0);
  },[])
  
  return (
    <View style={styles.Container}>
      <Text style={{alignSelf:'center',marginTop:100,marginBottom:10}}>Counts : {count}</Text>
      <TouchableOpacity onPress={()=>setCount(count+1)} style={styles.CountTouchabele}>
        <Text style={{color:'white',fontWeight:'600'}}>Add Counts</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FunctionalComponentUseState;

const styles = StyleSheet.create({
    Container:{
        flex:1
    },
    CountTouchabele:{
        backgroundColor:'red',
        marginHorizontal:30,
        paddingVertical:10,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center'
    }
})
