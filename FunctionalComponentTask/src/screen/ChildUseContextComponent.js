import { View, Text } from 'react-native'
import React from 'react'
import Child2SUseContextComponent from './Child2SUseContextComponent'


const ChildUseContextComponent = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Child2SUseContextComponent/>
    </View>
  )
}

export default ChildUseContextComponent