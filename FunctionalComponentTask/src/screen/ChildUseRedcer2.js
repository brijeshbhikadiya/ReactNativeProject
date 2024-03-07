import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { MyContext } from './UseReducerMain'

const ChildUseRedcer2 = () => {
    const values = useContext(MyContext)
  return (
    <View>
      <Text>{values}</Text>
    </View>
  )
}

export default ChildUseRedcer2