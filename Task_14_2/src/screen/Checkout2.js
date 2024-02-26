import { StyleSheet, Text, View ,Image} from 'react-native'
import React, { Component } from 'react'

export default class Checkout2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titlebar}>
            <Image source={require('../assets/images/back.png')} style={styles.backimage}></Image>
            <Text style={styles.reservationtext}>Reservation</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
})