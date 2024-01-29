import { Text, View} from 'react-native'
import React, { Component } from 'react'

export default class Test extends Component {

  render() {
    return (
      <View style={
        {
          flex:1,
          //backgroundColor:"black",
      
        }
      }>
        <View style={
          {
            height:50,
            width:50,
            // marginStart:50,
            marginLeft:50,
            backgroundColor:'red'
          }
        }>
          <View style={
          {
            height:50,
            width:50,
            backgroundColor:'blue'
          }
        }>
          <View style={
          {
            height:50,
            width:50,
            backgroundColor:'yellow'
          }
        }></View>
        </View>

        </View>
        <Text accessibilityLabel="Important Information">Accessible Text</Text>
        <Text accessibilityHint="Tap to open details">Accessible Text</Text>

      </View>
    );
  }
}

