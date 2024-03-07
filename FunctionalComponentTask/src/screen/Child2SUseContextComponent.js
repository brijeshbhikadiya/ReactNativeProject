import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { MyContext } from './FunctionalComponentUseContext'

const Child2SUseContextComponent = () => {
    const value = useContext(MyContext)
  return (
    <View>
      <Text style={{color:'black',fontWeight:'600'}}>Child2SUseContextComponent {'\n'}          {value}</Text>
    </View>
  )
}

export default Child2SUseContextComponent