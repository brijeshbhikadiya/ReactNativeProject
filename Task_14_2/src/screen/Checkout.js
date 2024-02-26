import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export default class Checkout extends Component {

    
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titlebar}>
            <Image source={require('../assets/images/back.png')} style={styles.backimage}></Image>
            <Text style={styles.reservationtext}>Reservation</Text>
        </View>

        <Image source={require('../assets/images/Stepper.png')}></Image>

        <View style={{marginTop:115}}>
            <View style={styles.textinputview}>
                <TextInput
                placeholder='First Name'
                placeholderTextColor={'rgba(153, 153, 153, 1)'}
                style={styles.textinputtext}></TextInput>
            </View>
            <View style={styles.textinputview}>
                <TextInput
                placeholder='Last Name'
                placeholderTextColor={'rgba(153, 153, 153, 1)'}
                style={styles.textinputtext}></TextInput>
            </View>
            <View style={styles.textinputview}>
                <TextInput
                placeholder='Email Address'
                placeholderTextColor={'rgba(153, 153, 153, 1)'}
                style={styles.textinputtext}></TextInput>
            </View>
            <View style={styles.textinputview}>
                <TextInput
                placeholder='Address'
                placeholderTextColor={'rgba(153, 153, 153, 1)'}
                style={styles.textinputtext}></TextInput>
            </View>
            <View style={styles.textinputview}>
                <TextInput
                placeholder='Post Code'
                placeholderTextColor={'rgba(153, 153, 153, 1)'}
                style={styles.textinputtext}></TextInput>
            </View>
            <View style={styles.textinputview}>
                <TextInput
                placeholder='Country'
                placeholderTextColor={'rgba(153, 153, 153, 1)'}
                style={styles.textinputtext}></TextInput>
            </View>
            <View style={styles.textinputview}>
                <TextInput
                placeholder='Mobile Phone'
                placeholderTextColor={'rgba(153, 153, 153, 1)'}
                style={styles.textinputtext}></TextInput>
            </View>
        </View>

        <TouchableOpacity style={styles.gotopaymentbutton}>
            <Text style={styles.gotopaymenttext} >Go to Payment</Text>
        </TouchableOpacity>
        
      
        
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    titlebar:{
        flexDirection:'row'
    },
    textinputview:{
        backgroundColor:'rgba(223, 222, 222, 0.3)',
        marginHorizontal:20,
        borderRadius:10,
        paddingHorizontal:14,
        marginTop:18
       },
    gotopaymentbutton:{
        marginHorizontal:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(248, 161, 112, 1)',
        marginTop:40,
        borderRadius:10,
        paddingVertical:15
    },
    backimage:{
        marginTop:25,
        marginLeft:19
    },
    reservationtext:{
        color:'rgba(57, 57, 57, 1)',
        fontSize:28,
        marginLeft:24,
        fontWeight:'bold',
        marginTop:14,
        fontFamily:"NunitoSans"
    },
    gotopaymenttext:{
        color:'rgba(255, 255, 255, 1)',
        fontSize:24,
        fontFamily:'NunitoSans',
        fontWeight:'bold'
    }
})