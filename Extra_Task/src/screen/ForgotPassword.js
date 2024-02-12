import { Image, StyleSheet, Text, View ,TextInput, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'

export default class ForgotPassword extends Component {
    constructor(){
        super()
        this.state={
            email:""
        }
       
    }
  render() {
    const vEmail=(email)=>{
        const ex=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
        return ex.test(String(email).toLowerCase())
    }
    return (
      <View style={styles.contianer}>
        <Image source={require('../assets/images/right_image.png')} style={{right:0,position:'absolute'}}></Image>
        <Image source={require('../assets/images/back_button.png')} style={{marginLeft:9,marginTop:25}}></Image>
        <Image source={require('../assets/images/lock.png')} style={{marginLeft:153,marginTop:91}}></Image>
        <Text style={styles.forgotpasswordtext}>Forgot Password?</Text>
        <View style={{justifyContent:'center',alignSelf:'center'}}>
            <Text style={styles.description}>Please enter the email address associated{'\n'} with your account. We will send you a link{'\n'}                 to reset your password. </Text>
        </View>

        <View style={styles.view1}>
                 <TextInput
                 placeholder='Email Address'
                 placeholderTextColor={'rgba(46, 46, 46, 1)'}
                 onChangeText={(Text)=>{
                    this.setState({email:Text})
                 }}></TextInput>
        </View>
        {this.state.email == ""?null:vEmail(this.state.email)?null:<View style={{flexDirection:'row'}}>
                                                                    <Image source={require('../assets/images/wrong_image.png')} style={{marginTop:8,marginLeft:20}}></Image>
                                                                    <Text style={{color:'red',marginTop:8,marginLeft:5}}>Wrong email address.</Text>
                                                                    </View>}

        <TouchableOpacity style={styles.sendlink}>
            <Text style={styles.sendlinktext}>Send Link</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    contianer:{
        flex:1
    },
    forgotpasswordtext:{
        color:'rgba(8, 2, 4, 1)',
        fontWeight:'700',
        fontSize:22,
        marginLeft:100,
        marginTop:19
    },
    description:{
        color:'rgba(79, 79, 79, 1)',
        fontWeight:'400',
        fontSize:16,
        marginTop:9
    },
    view1:{
        marginTop:86,
        marginHorizontal:20,
        borderBottomWidth:1,
        borderBottomColor:'rgba(229, 229, 229, 1)',
        marginTop:45
    },
    sendlink:{
        borderRadius:100,
        backgroundColor:'rgba(206, 28, 79, 1)',
        marginHorizontal:20,
        marginTop:50,
        height:54,
        justifyContent:'center',
        alignItems:'center'
    },
    sendlinktext:{
        color:'rgba(255, 255, 255, 1)',
        fontWeight:'700',
        fontSize:20
    }
})