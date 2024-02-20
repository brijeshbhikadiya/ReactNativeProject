import { ImageBackground, StyleSheet, Text, TouchableOpacity, View ,Image, TextInput, ScrollView} from 'react-native'
import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <ScrollView> */}
        <ImageBackground source={require('../assets/images/S4image_back.png')}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Onboarding')}>
                <Image source={require('../assets/images/back_button.png')}></Image>
            </TouchableOpacity>

            <View style={styles.loginview}>
                <Text style={styles.logintext}>Login</Text>
                <View style={styles.emailview}>
                    <TextInput
                    placeholder='Phone or email '></TextInput>
                </View>
                <View style={styles.passwordview}>
                    <TextInput
                    placeholder='Password'></TextInput>
                </View>
                <TouchableOpacity style={styles.forgotpasswordTouchable}>
                    <Text style={styles.forgotpasswordtext}>Forgot password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginTouchable}>
                    <Text style={styles.logintext2}>Login</Text>
                </TouchableOpacity>
            </View>

            <View style={{marginHorizontal:40,marginTop:19}}>
            <Text style={styles.accounttext}>Dont have an account?</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text style={styles.signuptext}>Signup here</Text>
            </TouchableOpacity>
            </View>
            
        </ImageBackground>
        {/* </ScrollView> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        //backgroundColor:'rgba(35, 155, 86, 1)'
    },
    loginview:{
        marginHorizontal:40,
        marginTop:220
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
        marginTop:16,
        paddingLeft:20
    },
    forgotpasswordTouchable:{
        backgroundColor:'rgba(30, 119, 68, 1)',
        alignSelf:'flex-end',
        paddingVertical:8,
        paddingHorizontal:9.5,
        borderRadius:8,
        marginTop:16
    },
    loginTouchable:{
        backgroundColor:'rgba(219, 255, 57, 1)',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:19,
        borderRadius:10,
        marginTop:17
    },
    logintext:{
        color:'rgba(255, 255, 255, 1)',
        //fontWeight:'700',
        fontFamily:'Caveat',
        fontSize:48,
        lineHeight:50,
        letterSpacing:0.1
    },
    logintext2:{
        color:'rgba(35, 155, 86, 1)',
        fontWeight:'600',
        fontSize:18,
        lineHeight:21.78,
        letterSpacing:0.57,
    },
    forgotpasswordtext:{
        color:'rgba(255, 255, 255, 1)',
        fontWeight:'400',
        fontSize:12,
        lineHeight:14.52
    },
    accounttext:{
        color:'rgba(255, 255, 255, 1)',
        fontWeight:'400',
        fontSize:14,
        lineHeight:19.67,
        alignSelf:'center'
    },
    signuptext:{
        color:'rgba(219, 255, 57, 1)',
        fontWeight:'700',
        fontSize:14,
        lineHeight:19.67,
        alignSelf:'center',
        marginBottom:23
    }
})