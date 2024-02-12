import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export default class SignInScreen extends Component {
    constructor(){
        super()
        this.state={
            email:"",
            showPassword:false,
            password:'',
            checkbox:false
        }
    };

    togglePassword=()=>{
        this.setState({
            showPassword:!this.state.showPassword
        })
    }

    changeBox=()=>{
        this.setState({
            checkbox:!this.state.checkbox
        })
    }

    
  render() {
    const vEmail=(email)=>{
        const ex=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
        return ex.test(String(email).toLowerCase())

    }
    return (
      <View style={styles.contianer}>
            <Image source={require('../assets/images/layout.png')}></Image>
            <Text style={styles.layouttext}>Be Bold. Be Beautiful.</Text>
            <Text style={styles.layouttext2}>Be You.</Text>
            <Image source={require('../assets/images/bottom_image.png')} style={{position:'absolute',bottom:0}}></Image>

        <View style={{marginHorizontal:20}}>
            <Text style={styles.signintext}>Sign In</Text>

            <View style={styles.view1}>
                 <TextInput
                 placeholder='Email Address'
                 placeholderTextColor={'rgba(46, 46, 46, 1)'}
                 onChangeText={(Text)=>{
                    this.setState({email:Text})
                 }}></TextInput>
            </View>
            {this.state.email===""?null:vEmail(this.state.email)?<Text style={{color:'green'}}>Valid Email!!!!</Text>:<Text style={{color:'red'}}>InValid Email!!!!!</Text>}
           

            <View style={styles.view4}>
                 <TextInput
                placeholder='Password'
                 placeholderTextColor={'rgba(46, 46, 46, 1)'} style={{flex:1}}
                 secureTextEntry={!this.state.showPassword}
                 onChangeText={(text)=>
                     this.setState({password:text})
                 }>
                 </TextInput>
                 <TouchableOpacity onPress={this.togglePassword}>
                 {this.state.showPassword?<Image source={require('../assets/images/hide_password.png')} style={styles.passwordimage}></Image>:<Image source={require('../assets/images/show_passoword.png')} style={styles.passwordimage}></Image>}
                 </TouchableOpacity>
                 
            </View>

            <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={this.changeBox}>
                {this.state.checkbox==false?<Image source={require('../assets/images/blank_checkbox.png')} style={{marginTop:22}}></Image>:<Image source={require('../assets/images/fill_checkbox.png')} style={{marginTop:22}}></Image>}
                </TouchableOpacity>
                <Text style={styles.remembermetext}>Remember Me</Text>
                <TouchableOpacity ><Text style={styles.forgetpasswordtext}>Forgot password?</Text></TouchableOpacity>
            </View>

            <View style={{marginTop:38}}>
            <TouchableOpacity style={styles.view2}>
                    <Image source={require('../assets/images/instagram.png')} style={{position:'absolute',left:19,top:16}}></Image>
                    <Text style={{position:'absolute',left:68,top:13,color:'rgba(8, 2, 4, 1)',fontWeight:'700',fontSize:20}}>Sign in with Instagram</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.view3}>
                    <Image source={require('../assets/images/google.png')} style={{position:'absolute',left:19,top:16}}></Image>
                    <Text style={{position:'absolute',left:68,top:13,color:'rgba(8, 2, 4, 1)',fontWeight:'700',fontSize:20}}>Sign in with Google</Text>
            </TouchableOpacity>
            </View>
            
        </View>

      
       
           
      </View>
    )
  }
}

const styles = StyleSheet.create({
    contianer:{
        flex:1
    },
    view1:{
        
        borderBottomWidth:1,
        borderBottomColor:'rgba(229, 229, 229, 1)',
        marginTop:45
    },
    view4:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderBottomColor:'rgba(229, 229, 229, 1)',
        marginTop:40
    },
    view2:{
        flexDirection:'row',
        borderWidth:1,
        borderRadius:100,
        width:346,
        height:54,
        borderColor:'rgba(218, 218, 218, 1)'
    },
    view3:{
        flexDirection:'row',
        borderWidth:1,
        borderRadius:100,
        width:346,
        height:54,
        borderColor:'rgba(218, 218, 218, 1)',
        marginTop:14
    },
    layouttext:{
        position:'absolute',
        color:'rgba(206, 28, 79, 1)',
        fontWeight:'400',
        fontSize:26,
        left:90,
        top:100, 
    },
    layouttext2:{
        position:'absolute',
        color:'rgba(206, 28, 79, 1)',
        fontWeight:'400',
        fontSize:26,
        left:170,
        top:130
    },
    signintext:{
        color:'rgba(8, 2, 4, 1)',
        fontWeight:'700',
        fontSize:26,
        //marginLeft:26,
        marginTop:45
    },
    remembermetext:{
        color:'rgba(240, 164, 188, 1)',
        fontWeight:'400',
        fontSize:14,
        left:7,
        marginTop:20
        
    },
    forgetpasswordtext:{
        color:'rgba(206, 28, 79, 1)',
        fontWeight:'400',
        fontSize:13,
        left:140,
        marginTop:20
    },
    passwordimage:{
       // position:'absolute',
        marginTop:10,
        
    }
})