import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'

export default class demo extends Component {
    constructor()
    {
        super()
        this.state={
            firstname:"",
            lastname:"",
            age:"",
            phonenumber:"",
            email:""
        }
    }
  
  render() {
    const isEmailValid=(text)=>{
        const emailPattern=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailPattern.test(text);
    };
    return (
      <View style={styles.container}>
        <View style={[styles.card,styles.shadow]}>
            <TextInput style={styles.t1}
            placeholder='First Name'
            placeholderTextColor={'#808080'}
            onChangeText={(text)=>{
                this.setState({firstname:text})
            }}>
            </TextInput>
        </View>
        <Text style={
                {
                    fontSize:14,
                    color:'#000000',
                    marginLeft:10,
                    marginTop:5
                }
            }>{this.state.firstname}</Text>
        <View style={[styles.card,styles.shadow]}>
            <TextInput style={
                {
                    width:360,
                    height:52,
                    paddingLeft:15,
                }
            }
            placeholder='Last Name'
            placeholderTextColor={'#808080'}
            onChangeText={(text)=>{
                this.setState({lastname:text})
            }}>
            </TextInput>
           
        </View>
        <Text style={
                {
                    fontSize:14,
                    color:'#000000',
                    marginLeft:10,
                    marginTop:5
                }
            }>{this.state.lastname}</Text>
        <View style={[styles.card,styles.shadow]}>
            <TextInput style={
                {
                    width:360,
                    height:52,
                    paddingLeft:15,

                }
            }
            placeholder='Phone Number'
            placeholderTextColor={'#808080'}
            onChangeText={(text)=>{
                this.setState({phonenumber:text})
            }}>
            </TextInput>
           
        </View>
        <Text style={
                {
                    fontSize:14,
                    color:'#000000',
                    marginLeft:10,
                    marginTop:5
                }
            }>{this.state.phonenumber}</Text>
            <View style={[styles.card,styles.shadow]}>
            <TextInput style={
                {
                    width:360,
                    height:52,
                   // borderWidth:1,
                    borderRadius:12,
                    //marginTop:52,
                    //marginLeft:10,
                    paddingLeft:15,
                    //shadowOpacity:70

                }
            }
            placeholder='Age'
            placeholderTextColor={'#808080'}
            onChangeText={(text)=>{
                this.setState({age:text})
            }}>
            </TextInput>
          
        </View>
        <Text style={
                {
                    fontSize:14,
                    color:'#000000',
                    marginLeft:10,
                    marginTop:5
                }
            }>{this.state.age}</Text>
            <View style={[styles.card,styles.shadow]}>
            <TextInput style={
                {
                    width:360,
                    height:52,
                   // borderWidth:1,
                    borderRadius:12,
                    //marginTop:52,
                    //marginLeft:10,
                    paddingLeft:15,
                    //shadowOpacity:70

                }
            }
            placeholder='Email'
            placeholderTextColor={'#808080'}
            onChangeText={(text)=>{
                this.setState({email:text})
            }}>
            </TextInput>
            
        </View>
        
        <Text style={
                {
                    fontSize:14,
                    color:'#000000',
                    marginLeft:10,
                    marginTop:5
                }
            }>{this.state.email==""?null:isEmailValid(this.state.email)?<Text style={
                 {
                         color:'green'
                     }
                 }>Valid email!!!!</Text>:<Text style={
                         {
                             color:'red'
                         }
                     }>invalid email!!!!</Text>}</Text>
      </View>
      
    )
    
  }
}
const styles=StyleSheet.create({
    container:{


        flex:1,
        marginHorizontal:25,
        marginVertical:30,
        
    },
    card:{


        borderRadius:8,
        borderColor:'white',
        borderWidth:0.3,
        
    },
    shadow:{
        
        shadowColor:'gray',
        shadowRadius:3,
        shadowOpacity:0.7,
        shadowOffset:{width:0,height:0},
        elevation:2
    },
    t1: {
        color:"#000000",
        height:52,
        width:360,
        fontSize:18,
        paddingLeft:15,
    },
})