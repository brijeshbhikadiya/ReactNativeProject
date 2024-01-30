import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import React, { Component } from 'react'

export default class CreateAccount extends Component {

    constructor(){
        super();
        this.state={
            checkBox:false,
            password:'',
            showPassword:false,
            phonenumber:'',
        };
    }

    changeCheck=()=>{
        this.setState({
            checkBox:!this.state.checkBox
        });
    };

    toggalePassword=()=>{
        this.setState({
            showPassword:!this.state.showPassword
        });
    };

    handlephonenumber=(text)=>{
       const numericValue = text.replace(/[^0-9]/g, '');
       this.setState({
        phonenumber: numericValue
       })
    };

    
  render() {
    
    const { password, showPassword ,phonenumber } = this.state;

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
                <TextInput style={styles.t2}
                placeholder='Email'
                keyboardType='email-address'
                ></TextInput>
                <Image source={require('../assets/images/login_mail.png')} style={styles.loginmail}/>
            </View>
                    

            <View style={styles.card}>
                <TextInput style={styles.t2}
                placeholder='Phone Number'
                onChangeText={this.handlephonenumber}
                placeholderTextColor={'#504956'}
                value={phonenumber}
                keyboardType='numeric'
                ></TextInput>
                    <Image source={require('../assets/images/sign_up_call.png')} style={styles.signupcall}/>
            </View>

            <View style={styles.card}>
                <TextInput style={styles.t2}
                  placeholder='Create Password'
                  placeholderTextColor={'#504956'}></TextInput>
                    <Image source={require('../assets/images/sign_up_pw.png')} style={styles.signuppassword}/>
            </View>

        

            <View style={styles.card}>
                <TextInput style={styles.t2}
                placeholder='Confirm Password'
                placeholderTextColor={'#504956'}
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={(text) =>this.setState({password:text})}></TextInput>

                <TouchableOpacity onPress={this.toggalePassword}>
                    <Image source={showPassword?require('../assets/images/sign_up_show_pw.png'):require('../assets/images/sign_up_hide_pw.png')}
                     style={styles.signupshowpassword}></Image>
                </TouchableOpacity>
            </View>

            <View style={styles.card}>
                <TextInput style={styles.t3}
                 placeholder='Referral code (optional)'
                 placeholderTextColor={'#504956'}></TextInput>
            </View>

            <View style={{flexDirection:'row'}}>
            
            <TouchableOpacity onPress={this.changeCheck}>
                <Image source={this.state.checkBox==false?require('../assets/images/Rectangle_16190.png'):require('../assets/images/sign_up_sel_chk.png')}
                style={styles.checkbox}/>
            </TouchableOpacity>

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
        width:'88%',
        fontSize:18,
        color:'#504956',
        paddingLeft:19,
        paddingTop:16,
        paddingBottom:17,
        fontWeight:'400',
        fontFamily:'Helvetica'
    },
    t3:{
        fontSize:18,
        color:'#504956',
        paddingLeft:19,
        paddingTop:14,
        paddingBottom:17,
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
        position:'absolute',
        marginTop:20,
        marginLeft:310,
    },
    signupcall:{
        position:'absolute',
        marginTop:20,
        marginLeft:310,
    },
    signuppassword:{
        position:'absolute',
        marginTop:20,
        marginLeft:310,
    },
    signupshowpassword:{
        position:'absolute',
        marginTop:20,
        //marginLeft:5,
    },
   
    checkbox:{
        marginTop:20,
        marginLeft:20,
        // height:16,
        // width:16
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