import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
       
    <View style={styles.container}>

        <Image source={require('../assets/images/back.png')}
             style={styles.backimage}/>

        <View style={styles.imageview2}>
            <Image source={require('../assets/images/login_logo.png')}
            style={styles.loginlogo}/>
        </View>
        

       
            <View style={styles.container2}>
                <View style={styles.container3}>
                    <Text style={styles.t1}>Welcome back!</Text>
                    <View style={styles.card}>
                        <TextInput style={styles.t2}
                        placeholder='Email'
                        placeholderTextColor={'#504956'}
                        keyboardType='email-address'></TextInput>
                        <Image source={require('../assets/images/login_mail.png')} style={styles.loginmail}/>
                    </View>
                    <View style={styles.card2}>
                        <TextInput style={styles.t2}
                        placeholder='Password'
                        placeholderTextColor={'#504956'}
                        ></TextInput>
                        <Image source={require('../assets/images/login_lock.png')} style={styles.loginlock}/>
                    </View>

                    <TouchableOpacity style={styles.touachableopacity}>
                        <Text style={styles.t3}>Sign in</Text>
                    </TouchableOpacity>

                    <Text style={styles.t4}>Forgot Password?</Text>

                    <Text style={styles.t5}>By signing-in you accept our Terms ofService and Privacy Policy</Text>
                 
                </View> 
            </View>
    </View>
    
    )
  }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(80,74,87,1)'
    },
    backimage:{
        marginLeft:12,
        marginTop:19
    },
    loginlogo:{
        marginTop:8.75,
        alignItems:'center'
    },
    imageview2:{
        flexDirection:'row',
        justifyContent:'center'
    },
    container2:{
       // flex:1,
        backgroundColor:'#B78097',
        marginTop:43.96,
        paddingLeft:20,
        paddingRight:20,
        paddingTop:23,
        paddingBottom:193,
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    container3:{
        //flex:1,
        height:387,
        backgroundColor:'#F1E9E6',
        borderRadius:20,
    },
    t1:{
      fontSize:26,
      color:'rgba(51,51,51,1)',
      fontFamily:'Helvetica',
      marginLeft:76,
      marginTop:48,
      marginRight:81,
      fontWeight:'400'
    },
    card:{
        height:54,
        width:315,
         marginTop:37,
         marginLeft:18,
        marginRight:17,
        backgroundColor:'white',
        borderRadius:10,
        flexDirection:'row',
        position:'relative'
    },
    t2:{
        width:'87%',
        fontSize:18,
        color:'#504956',
        paddingLeft:19,
        paddingTop:16,
        paddingBottom:17,
        fontWeight:'400',
        fontFamily:'Helvetica'
    },
    loginmail:{
        position:'absolute',
        marginTop:17,
        marginLeft:275,
    },
    loginlock:{
        position:'absolute',
        marginLeft:275,
        marginTop:17,
        marginBottom:17
    },
    card2:{
        height:54,
        width:315,
        marginLeft:18,
        marginRight:17,
        backgroundColor:'white',
        borderRadius:10,
        flexDirection:'row',
        marginTop:17,
        position:'relative'
    },
    touachableopacity:{
        backgroundColor:'#FF3D52',
        height:54,
        width:315,
        borderRadius:20,
        marginLeft:18,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'

    },
    t3:{
        fontSize:18,
        fontWeight:'700',
        color:'white',
        fontFamily:'Helvetica'
    },
    t4:{
        color:'#504956',
        fontSize:16,
        fontWeight:'400',
        fontFamily:'Helvetica',
        marginLeft:105,
        marginTop:25,
    },
    t5:{
        color:'#FFFFFF',
        textAlign:'center',
        marginTop:45,
        fontSize:16,
        fontFamily:'Helvetica',
        marginLeft:45,
        marginRight:59
    }
   
})