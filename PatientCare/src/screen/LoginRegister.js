import { Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export default class LoginRegister extends Component {
    constructor(){
        super()
        this.state={
            signInHovered: false,
            registerHovered: false
        }
    }
  render() {
    const { signInHovered, registerHovered } = this.state;
    return (
      <View style={styles.Container}>
        <StatusBar hidden></StatusBar>
        <View style={{backgroundColor:'#241212',flex:1}}>
            <Image source={require('../assets/images/login_logo.png')} style={{alignSelf:'center',marginTop:130}}></Image>
            <Text style={{color:'white',textAlign:'center',marginTop:20,fontSize:15,fontWeight:'500',letterSpacing:2}}>Welcome to My CareCrew! Our{'\n'}mission is to make the cancer journey{'\n'}just a little more bearable.</Text>
        </View>
       <ImageBackground
       style={{flex:1}}
       source={require('../assets/images/Banner.jpg')}>
        <TouchableOpacity 
        activeOpacity={1}
        onPress={() => {}}
                        onPressIn={() => this.setState({ signInHovered: true })}
                        onPressOut={() => this.setState({ signInHovered: false })} style={[{justifyContent:'center',alignItems:'center',backgroundColor:'#ff474b',paddingVertical:13,borderRadius:100,marginHorizontal:30,marginTop:-20},signInHovered && styles.hoveredButton]}>
            <Text style={[{color:'white',fontSize:19,fontWeight:'500'}, signInHovered && styles.hoveredButtonText]}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        activeOpacity={1}
         onPress={() => {}}
                        onPressIn={() => this.setState({ registerHovered: true })}
                        onPressOut={() => this.setState({ registerHovered: false })} style={[{justifyContent:'center',alignItems:'center',backgroundColor:'#ff474b',paddingVertical:13,borderRadius:100,marginHorizontal:30,marginTop:15}, registerHovered && styles.hoveredButton]}>
        <Text style={[{color:'white',fontSize:19,fontWeight:'500'}, registerHovered && styles.hoveredButtonText]}>Register</Text>
        </TouchableOpacity>
       </ImageBackground>
      </View>
    )
  }
}

const styles =  StyleSheet.create({
    Container:{
        flex:1
    },
    hoveredButton: {
        backgroundColor: 'white'
    },
    hoveredButtonText: {
        color: 'black'
    }
})