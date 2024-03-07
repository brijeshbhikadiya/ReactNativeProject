import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useRef, useState } from 'react'



const FunctionalComponentTask = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const vEmail=(email)=>{
        const ex=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
        return ex.test(String(email).toLowerCase())
        
      }

      const inputRef = useRef(null);

      const focusInput = () => {
        inputRef.current.focus();
      }

  return (
    
    <View style={styles.Container}>
        <Text style={styles.LoginFormText}>Login Form</Text>
        <View style={styles.EmailView}>
            <TextInput
             placeholder='Email'
             ref={inputRef}
             onChangeText={(text)=>setEmail(text)} ></TextInput>
        </View>

        {email==''?null:vEmail(email)?<Text style={{marginLeft:20,color:'green'}}>Valid Email</Text>:<Text  style={{marginLeft:20,color:'red'}}>Invalid Email</Text>}

        <View style={styles.EmailView}>
            <TextInput placeholder='Password'></TextInput>
        </View>

        <TouchableOpacity style={styles.SubmitTouchable} onPress={focusInput}>
            <Text style={{color:'black',fontWeight:'600'}}>Submit</Text>
        </TouchableOpacity>
    </View>
  )
}

export default FunctionalComponentTask

const styles = StyleSheet.create({
    Container:{
        flex:1
    },
    EmailView:{
        borderRadius:15,
        backgroundColor:'white',
        shadowColor:'black',
        shadowOpacity:0.5,
        elevation:2,
        marginHorizontal:20,
        marginTop:20,
        paddingLeft:20,
    },
    SubmitTouchable:{
        backgroundColor:'lightblue',
        borderRadius:15,
        shadowColor:'black',
        shadowOpacity:0.5,
        elevation:2,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:10,
        marginHorizontal:50,
        marginTop:20,
        paddingLeft:20,
    },
    LoginFormText:{
        fontSize:20,
        fontWeight:'bold',
        color:'#000000',
        alignSelf:'center',
        marginTop:20
    }
})