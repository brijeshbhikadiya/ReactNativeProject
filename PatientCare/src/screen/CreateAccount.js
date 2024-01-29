import { Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, { Component } from 'react'

export default class CreateAccount extends Component {
  
  render() {
    return (
      <View style={styles.container}>

        <View style={{flexDirection:'row'}}>
        <Image source={require('../assets/images/back.png')}
        style={styles.backimage}/>
        <Image source={require('../assets/images/login_logo.png')}
        style={styles.loginlogo}/>
        </View>
      
        <View style={styles.container2}>
            <Text style={styles.t1}>Please Register</Text>

            <View style={styles.card}>
                <Text style={styles.t2}>Email</Text>
                    <Image source={require('../assets/images/login_mail.png')} style={styles.loginmail}/>
            </View>

            <View style={styles.card}>
                <Text style={styles.t2}>Phone Number</Text>
                    <Image source={require('../assets/images/sign_up_call.png')} style={styles.signupcall}/>
            </View>

            <View style={styles.card}>
                <Text style={styles.t2}>Create Password</Text>
                    <Image source={require('../assets/images/sign_up_pw.png')} style={styles.signuppassword}/>
            </View>

            
            <View style={styles.card}>
                <Text style={styles.t2}>Confirm Password</Text>
                    <Image source={require('../assets/images/sign_up_show_pw.png')} style={styles.signupshowpassword}/>
            </View>

            <View style={styles.card}>
                <Text style={styles.t3}>Referral code (optional)</Text>
            </View>

            <View style={{flexDirection:'row'}}>
            
            <Image source={require('../assets/images/sign_up_sel_chk.png')} style={styles.checkbox}/>
             <Text style={styles.t4}>By signing-up you accept our <Text style={{textDecorationLine:'underline'}}>Terms</Text>                            ofServices and Privacy Policy.</Text>
            </View>

            <TouchableOpacity style={styles.touachableopacity}>
                        <Text style={styles.t5}>Continue</Text>
            </TouchableOpacity>



        </View>
    
      </View>
    )
  }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#504A57'
    },
    backimage:{
        marginTop:30,
        marginLeft:20
    },
    loginlogo:{
        width: 40,
        height: 25.08,
        marginTop:30,
        marginLeft:130,
       
    },
    container2:{
        marginTop:30,
        flex:1,
        backgroundColor:'#F1E9EC',
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    t1:{
        color:'rgba(51,51,51,1)',
        fontSize:24,
        fontFamily:'Helvetica',
        fontWeight:'400',
        marginTop:26,
        marginLeft:20,
        fontStyle:'normal'
    },
    card:{
        height:54,
        width:350,
        marginTop:21,
        marginLeft:20,
        marginRight:17,
        backgroundColor:'white',
        borderRadius:10,
        flexDirection:'row'
    },
    t2:{
        fontSize:18,
        color:'#504956',
        marginLeft:19,
        marginTop:16,
        marginBottom:17,
        fontWeight:'400',
        fontFamily:'Helvetica'
    },
    t3:{
        fontSize:18,
        color:'#504956',
        marginLeft:19,
        marginTop:14,
        marginBottom:17,
        fontWeight:'400',
        fontFamily:'Helvetica'
    },
    t4:{
        color:'#504956',
        fontSize:16,
        fontStyle:'normal',
        fontWeight:'400',
        fontFamily:'Helvetica',
        marginTop:14,
        marginLeft:13,
        textAlign:'left'
    },
    t5:{
        fontSize:18,
        fontWeight:'700',
        color:'white',
        fontFamily:'Helvetica'
    },
    loginmail:{
        marginTop:20,
        marginLeft:248,
    },
    signupcall:{
        marginTop:20,
        marginLeft:170,
    },
    signuppassword:{
        marginTop:20,
        marginLeft:155,
    },
    signupshowpassword:{
        marginTop:20,
        marginLeft:140,
    },
    checkbox:{
        marginTop:20,
        marginLeft:20,
        height:16,
        width:16
    },
    touachableopacity:{
        backgroundColor:'#FF3D52',
        height:54,
        width:315,
        borderRadius:20,
        marginLeft:40,
        marginTop:50,
        justifyContent:'center',
        alignItems:'center'
    }
})