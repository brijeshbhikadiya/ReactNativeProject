import { Image, ImageBackground, StyleSheet, Text, View,fontFamily } from 'react-native'
import React, { Component } from 'react'

export default class OnBording extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/images/S1image_back.png')} style={{flex:1}}>
            <Image source={require('../assets/images/S1main_image.png')} style={styles.mainimage1}></Image>
            <Image source={require('../assets/images/S1like.png')} style={styles.likeimage}></Image>
            <Text style={styles.imagetitle1}>Spread Love Easier</Text>
            <Text style={styles.imgaedes1}>Find your favourite charity through {'\n'}  user-friendly search options and {'\n'} donate at the press of the buttons.</Text>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    mainimage1:{
        alignSelf:'center',
        marginTop:165.74
    },
    likeimage:{
        position:'absolute',
        left:40,
        top:359.74
    },
    imagetitle1:{
        color:'rgba(255, 255, 255, 1)',
        fontWeight:'700',
        fontSize:40,
        lineHeight:50.4,
        alignSelf:'center',
        marginTop:29,
        fontFamily:'Caveat'
    },
    imgaedes1:{
        color:'rgba(255, 255, 255, 1)',
        fontWeight:'400',
        fontSize:15,
        lineHeight:18.15,
        alignSelf:'center',
        marginTop:12,
        //alignItems:'center'
    }
    
})