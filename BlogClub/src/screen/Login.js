import { Text, View,StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component } from 'react'

export default class Login extends Component {
  constructor(){
    super();
    this.state={
      password:'',
      showPassword:false,
      email:'',
      isEmailFocused: false,
      isPasswordFocused: false,
    }
  }

  togglePassword=()=>{
    this.setState({
      showPassword:!this.state.showPassword
    });
  }

  render() {

    const { password, showPassword,isEmailFocused,isPasswordFocused} = this.state;

    const isEmailValid=(text)=>{
      const emailPattern=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      return emailPattern.test(text);
  };

    return (
      <ScrollView style={styles.container}>
      <View style={styles.container}>

        <Image source={require('../assets/images/LOGO_SMALL.png')}
        style={styles.logo}></Image>

        <View style={styles.outercontainer}>

            <View style={styles.loginsignupvontainer}>
              <Text style={styles.logintext}>Login</Text>
              <Text style={styles.signuptext}>Sign up</Text>
            </View>
          
            <View style={styles.innercontainer}>
                <Text style={styles.welcometext}>Welcome back</Text>
                <Text style={styles.signupaccounttext}>Sign in with your account</Text>


                <Text style={styles.usernametext}>Username</Text>

                <TextInput style={[styles.t2, isEmailFocused ? styles.focusedInput:null]}
                  keyboardType='email-address'
                  placeholderTextColor={'rgba(13, 37, 60, 1)'}
                  onFocus={() => this.setState({ isEmailFocused: true })}
                  onBlur={() => this.setState({ isEmailFocused: false })}
                  onChangeText={(text)=>{
                    this.setState({email:text})
                }}></TextInput>

               

                <Text style={styles.emailvalidatetext}>
                  {this.state.email==""?null:isEmailValid(this.state.email)?
                  <Text style={{color:'green'}}>Valid email!!!!</Text>:
                  <Text style={{color:'red'}}>invalid email!!!!</Text>}
                </Text>


<View style={[styles.passwordcontainer,isPasswordFocused ? styles.focusedInput:null]}>
                <Text style={styles.passwrodText}>Password</Text>
                <View style={styles.passwordView}>
                    <TextInput 
                        placeholderTextColor={'#0D253C'}
                        style={styles.passwordTextInput}
                        secureTextEntry={!showPassword}
                        onFocus={() => this.setState({ isPasswordFocused: true })}
                        onBlur={() => this.setState({ isPasswordFocused: false })}
                        onChangeText={(text)=>this.setState({
                          password:text,
                    })}
                    ></TextInput>
                    <TouchableOpacity onPress={this.togglePassword}>
                            <Text style={styles.showText}>{showPassword ? 'Hide' : 'Show'}</Text>
                    </TouchableOpacity>
                </View>
                </View>
              
                
             
                

                <TouchableOpacity style={styles.touchableOpacity}>
                  <Text style={styles.logintext2}>LOGIN</Text>
                  </TouchableOpacity>

              

                <View style={styles.forgetresetcontainer}> 
                  <Text style={styles.forgotpasswordtext}>Forgot your password?</Text>
                  <Text style={styles.resetpasswordtext}>Reset here</Text>
                </View>

                <View style={{justifyContent:'center',flexDirection:'row'}}> 
                  <Text style={styles.orsignwithtext}>Or sign in with</Text>
                </View>

                <View style={{flexDirection:'row',justifyContent:'center',marginTop:16}}>
                  <Image source={require('../assets/images/SOCIAL_MEDIA.png')}></Image>
                </View>
            </View>
        </View>
      </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'rgba(255, 255, 255, 1), rgba(244, 247, 255, 1)',
    marginBottom:20
    
  },
  logo:{
    width:110.17,
    height:56,
    marginTop:57,
    marginLeft:132
  },
  outercontainer:{
    flex:1,
    backgroundColor:'rgba(55, 106, 237, 1)',
    marginTop:32,
    borderTopLeftRadius:28,
    borderTopRightRadius:28
  },
   innercontainer:{
     flex:1,
     backgroundColor:'rgba(255, 255, 255, 1)',
     borderTopLeftRadius:28,
     borderTopRightRadius:28
 },
  loginsignupvontainer:{
      flexDirection:'row',
      //justifyContent:'space-around',
      marginTop:28,
      marginBottom:26
 },
  logintext:{
    color:'#FFFFFF',
    fontSize:18,
    fontWeight:'800',
    textTransform: 'uppercase',
    lineHeight:18,
    fontFamily:'Avenir',
    marginLeft:95
  },
  signuptext:{
    color:'#FFFFFF40',
    fontSize:18,
    fontWeight:'800',
    textTransform: 'uppercase',
    lineHeight:18,
    fontFamily:'Avenir',
    marginLeft:90
  },
  welcometext:{
    fontSize:24,
    fontWeight:'800',
    lineHeight:32,
    color:'rgba(13, 37, 60, 1)',
    fontFamily:'Avenir',
    marginTop:32,
    marginLeft:40
  },
  signupaccounttext:{
    color:'rgba(45, 67, 121, 1)',
    fontSize:14,
    fontFamily:'Avenir',
    fontStyle:'normal',
    fontWeight:'400',
    lineHeight:18,
    marginLeft:40,
    marginTop:10
  },
  usernametext:{
    color:'rgba(45, 67, 121, 1)',
    fontSize:14,
    fontFamily:'Avenir',
    fontStyle:'normal',
    fontWeight:'400',
    marginLeft:40,
    marginTop:37
  },
  passwordtext:{
    color:'rgba(45, 67, 121, 1)',
    fontSize:14,
    fontFamily:'Avenir',
    fontStyle:'normal',
    fontWeight:'400',
    marginLeft:40,
    marginTop:20
  },
  t2:{
       width:'82%',
       marginHorizontal:40,
       fontSize:16,
       fontStyle:'normal',
       fontWeight:'800',
       fontFamily:'Avenir',
       color:'#0D253C',
       marginTop:5,
       borderBottomWidth:1,
       borderBottomColor:'rgba(217, 223, 235, 1)'
    },
    card:{
      height:1,
      width:320,
      backgroundColor:'#D9DFEB',
      borderRadius:12,
      marginHorizontal:40
    },
    touchableOpacity:{
      height:60,
      width:320,
      backgroundColor:'#376AED',
      borderRadius:12,
      marginHorizontal:40,
      marginTop:30,
      alignItems:'center',
      justifyContent:'center'
    },
    logintext2:{
      color:'#FFFFFF',
      fontWeight:'800',
      fontSize:16,
      textTransform:'uppercase',
      fontFamily:'Avenir'
    },
    forgetresetcontainer:{
      flexDirection:'row',
      justifyContent:'center',
      marginTop:20
    },
    forgotpasswordtext:{
      color:'#2D4379',
      //fontWeight:'350',
      fontSize:14,
      fontFamily:'Avenir'
    },
    resetpasswordtext:{
      marginLeft:8,
      color:'#376AED',
      fontWeight:'500',
      fontSize:14,
      fontFamily:'Avenir'
    },
    orsignwithtext:{
      marginTop:32,
      color:'#2D4379',
      fontSize:12,
      fontFamily:'Avenir',
      lineHeight:18,
      textTransform:'uppercase',
      letterSpacing:1.75
    },
    passwordcontainer:{flexDirection:'column',
     borderBottomColor:'rgba(217, 223, 235, 1)',
     marginTop:14,
     borderBottomWidth:1,
     width:330,
     marginLeft:40,
  },
    showpasswordtiachable:{
      
      position:'absolute',
      marginTop:290,
     right:40
    },
    showtext:{
      color:'#376AED',
      fontSize:14,
      fontStyle:'normal',
      fontWeight:'500',
      fontFamily:'Avenir',
    },
    hideText:{
      color:'#376AED',
      fontSize:14,
      fontStyle:'normal',
      fontWeight:'500',
      fontFamily:'Avenir',
    },
    emailvalidatetext:{
      fontSize:14,
      color:'#000000',
      marginLeft:40,
      marginTop:5
    },focusedInput:{
      borderBottomColor:'blue'
    },
    passwrodText:{

      fontFamily:'Avenir',
      fontSize:14,
      lineHeight:19.12,
      fontWeight:'400',
      marginTop:20,
      // marginLeft:40,
      color:'#2D4379'
  },
  //username TextInput
  passwordTextInput:{

      flex:1,
      height:37,
      marginTop:12,
      // marginHorizontal:40,
      fontSize:16,
      fontWeight:'500',
      lineHeight:21.86,
      // borderBottomColor:'#376AED',
      // borderBottomWidth:2,
      // paddingBottom:12,
      // paddingTop:1
  },
  //password view
  passwordView:{

      flexDirection:'row',
      justifyContent:'space-between',
      paddingBottom:10
  },
  showText:{

      color:'#376AED',
      fontSize:14,
      lineHeight:19.12,
      fontWeight:'500',
      // marginEnd:40,
      marginTop:14,
  },

})


