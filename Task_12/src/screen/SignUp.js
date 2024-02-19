import { ImageBackground, StyleSheet, Text, View,TouchableOpacity,Image,TextInput } from 'react-native'
import React, { Component } from 'react'

export default class SignUp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/images/main_image5.png')} style={{flex:1}}>
            <TouchableOpacity>
                <Image source={require('../assets/images/back_button.png')}></Image>
            </TouchableOpacity>

            <View style={styles.signupview}>
                <Text style={styles.signuptext}>Signup</Text>
                <View style={styles.emailview}>
                    <TextInput
                    placeholder='Enter full name'></TextInput>
                </View>
                <View style={styles.passwordview}>
                    <TextInput
                    placeholder='Phone number'></TextInput>
                </View>
                <View style={styles.passwordview}>
                    <TextInput
                    placeholder='Email address '></TextInput>
                </View>
                <View style={styles.passview}>
                    <TextInput
                    placeholder='Password'
                    style={{flex:1}}></TextInput>
                    <Image source={require('../assets/images/eye.png')} style={{marginTop:14,marginRight:10}}></Image>
                </View>
            </View>

            <View style={{flexDirection:'row',marginTop:18,marginHorizontal:40}}>
                <Image source={require('../assets/images/check_box.png')} style={{marginTop:4}}></Image>
                <Text style={styles.textdes1}>
                    By signing up, user agrees to the {'\n'}<Text style={styles.textdes2}>terms & conditions</Text> and <Text style={styles.textdes2}>privacy policy.</Text>
                </Text>
            </View>

            <TouchableOpacity style={styles.loginTouchable}>
                    <Text style={styles.logintext2}>Signup</Text>
            </TouchableOpacity>

            <View style={{marginHorizontal:40,marginTop:19}}>
            <Text style={styles.accounttext}>If you have an account?</Text>
            <TouchableOpacity>
                    <Text style={styles.signuptext2}>Login here</Text>
            </TouchableOpacity>
            </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    signupview:{
        marginTop:60,
        marginHorizontal:40
    },
    emailview:{
        backgroundColor:'rgba(255, 255, 255, 1)',
        borderRadius:10,
        marginTop:35,
        paddingLeft:20
    },
    passwordview:{
        backgroundColor:'rgba(255, 255, 255, 1)',
        borderRadius:10,
        marginTop:20,
        paddingLeft:20
    },
    passview:{
        backgroundColor:'rgba(255, 255, 255, 1)',
        borderRadius:10,
        marginTop:20,
        paddingLeft:20,
        flexDirection:'row'
    },
    signuptext:{
        color:'rgba(255, 255, 255, 1)',
        fontWeight:'700',
        fontFamily:'Caveat',
        fontSize:48,
        lineHeight:50,
        letterSpacing:0.1
    },
    textdes1:{
        marginLeft:19,
        color:'rgba(255, 255, 255, 1)',
        fontWeight:'400',
        fontSize:12,
        lineHeight:14.52},
    textdes2:{
            marginLeft:19,
            color:'rgba(255, 255, 255, 1)',
            fontWeight:'500',
            fontSize:12,
            lineHeight:14.52,
        textDecorationLine:'underline'
    },
    loginTouchable:{
        backgroundColor:'rgba(219, 255, 57, 1)',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:19,
        borderRadius:10,
        marginTop:19,
        marginHorizontal:40
    },
    logintext2:{
        color:'rgba(35, 155, 86, 1)',
        fontWeight:'600',
        fontSize:18,
        lineHeight:21.78,
        letterSpacing:0.57,
    },
    signuptext2:{
        color:'rgba(219, 255, 57, 1)',
        fontWeight:'700',
        fontSize:14,
        lineHeight:19.67,
        alignSelf:'center',
        marginBottom:23
    }, accounttext:{
        color:'rgba(255, 255, 255, 1)',
        fontWeight:'400',
        fontSize:14,
        lineHeight:19.67,
        alignSelf:'center'
    },
})