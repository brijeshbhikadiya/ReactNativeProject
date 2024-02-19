import { ImageBackground, StyleSheet, Text, View,TouchableOpacity,Image,TextInput } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class SignUp extends Component {
 constructor(){
    super()
    this.state={
        email:"",
        showPassword:false,
        phonenumber:'',
        checkbox:false,
        name:''
    }
 }

 togglePassword=()=>{
    this.setState({showPassword:!this.state.showPassword})
 }

 handleCheckbox=()=>{
    this.setState({checkbox:!this.state.checkbox})
 }

 handlePhonenumber=(text)=>{
    const numericvalue=text.replace(/[^0-9]/g, '');
    this.setState({phonenumber:numericvalue})
 }



 
  render() {
    vEmail=(email)=>{
        const ex=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
        return ex.test(String(email).toLowerCase())
    }
    handleName=(text)=>{
        const namerx=/^[a-zA-Z ]+$/
        return namerx.test(String(text))
     }

    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/images/main_image5.png')} style={{paddingBottom:20}}>
            <TouchableOpacity>
                <Image source={require('../assets/images/back_button.png')}></Image>
            </TouchableOpacity>

            <View style={styles.signupview}>
                <Text style={styles.signuptext}>Signup</Text>
                <View style={styles.emailview}>
                    <TextInput
                    onChangeText={(text)=>{this.setState({name: text})}}
                    placeholder='Enter full name'></TextInput>
                </View>
                {this.state.name == ""?null:handleName(this.state.name)?null:<Text style={{color:'yellow',marginLeft:10}}>Enter a valid Name..</Text>}
                <View style={styles.passwordview}>
                    <TextInput
                    maxLength={10}
                    keyboardType='number-pad'
                    onChangeText={this.handlePhonenumber}
                    value={this.state.phonenumber}
                    placeholder='Phone number'></TextInput>
                </View>
                <View style={styles.passwordview}>
                    <TextInput
                    keyboardType='email-address'
                    onChangeText={(text)=>this.setState({email:text})}
                    placeholder='Email address '></TextInput>
                </View>
                {this.state.email == ""?null:vEmail(this.state.email)?<Text style={{color:'yellow',marginLeft:10}}>Valid Email..</Text>:<Text style={{color:'red',marginLeft:10}}>Invalid Email.</Text>}
                <View style={styles.passview}>
                    <TextInput
                    secureTextEntry={!this.state.showPassword}
                    onChangeText={(text)=>this.setState({password:text})}
                    placeholder='Password'
                    style={{flex:1}}></TextInput>
                    <TouchableOpacity onPress={this.togglePassword}>
                    {this.state.showPassword? <Image source={require('../assets/images/eye.png')} style={{marginTop:14,marginRight:10}}></Image>:
                    <Image source={require('../assets/images/hide_eye_icon.png')} style={{marginTop:14,marginRight:10}}></Image>}</TouchableOpacity>
                </View>
            </View>

            <View style={{flexDirection:'row',marginTop:18,marginHorizontal:40}}>
                <TouchableOpacity onPress={this.handleCheckbox}>
                {this.state.checkbox?<Image source={require('../assets/images/checkBox_icon.png')} style={{marginTop:4}}></Image>:<Image source={require('../assets/images/check_box.png')} style={{marginTop:4}}></Image>}
                </TouchableOpacity>
                <View>
                <Text style={styles.textdes1}>By signing up, user agrees to the</Text>
                    <View style={{flexDirection:'row'}}>
                    <TouchableOpacity><Text style={styles.textdes2}>terms & conditions</Text></TouchableOpacity>
                     <Text style={styles.andtext}>and</Text> 
                     <TouchableOpacity><Text style={styles.textdes3}>privacy policy</Text></TouchableOpacity>
                    </View>
                
                </View>
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
        fontSize:13,
        lineHeight:14.52},
    andtext:{
        marginHorizontal:3,
        marginTop:5,
        color:'rgba(255, 255, 255, 1)',
        fontWeight:'400',
        fontSize:13,
        lineHeight:14.52},
    textdes2:{
            marginLeft:19,
            color:'rgba(255, 255, 255, 1)',
            fontWeight:'500',
            fontSize:13,
            marginTop:5,
            lineHeight:14.52,
            textDecorationLine:'underline'
    },
    textdes3:{
        marginLeft:1,
        color:'rgba(255, 255, 255, 1)',
        fontWeight:'500',
        fontSize:12,
        marginTop:5,
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