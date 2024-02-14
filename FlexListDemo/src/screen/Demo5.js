import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export default class Demo5 extends Component {
  render() {
    return (
      <View>
        <View style={{flexDirection:'row',backgroundColor:'white',borderColor:'grey',borderWidth:1,marginHorizontal:20,borderRadius:100,marginTop:30,shadowColor:'black',shadowOpacity:0.5,shadowColor:'grey',elevation:5}}>
            <TextInput
            placeholder='search'
            style={{flex:1}}></TextInput>
            <TouchableOpacity>
                <Image source={require('../assets/images/arrowLeft.png')}></Image>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}