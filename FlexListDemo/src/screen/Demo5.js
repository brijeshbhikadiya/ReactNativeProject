import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export default class Demo5 extends Component {
  constructor()
  {
    super()
    this.state={
      email:"",
      password:"",
      showPassword:false,
      phonenumber:''
    }

  
  }
  togglePassword=()=>{
    this.setState({showPassword:!this.state.showPassword})
   }

   handlePhonenumber=(text)=>{
      const numericvalue=text.replace(/[^0-9]/g, '');
      this.setState({phonenumber:numericvalue})
   }
  
  render() {
    
    vEmail=(email)=>{
      const ex =/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
      return ex.test(String(email).toLowerCase()) 
    }
    
    return (
      <View>
        <View style={{flexDirection:'row',backgroundColor:'white',borderColor:'grey',borderWidth:1,marginHorizontal:20,borderRadius:100,marginTop:30,shadowColor:'black',shadowOpacity:0.5,shadowColor:'grey',elevation:5}}>
        <TouchableOpacity>
                <Image source={require('../assets/images/arrowLeft.png')}></Image>
            </TouchableOpacity>
           
            <TextInput
            placeholder='email'
            onChangeText={(text)=>{
              this.setState({email:text})
            }}
            style={{flex:1}}></TextInput>
            
            <TouchableOpacity>
          
                <Image source={require('../assets/images/arrowLeft.png')}></Image>
            </TouchableOpacity>
        </View>
        {this.state.email==""?null:vEmail(this.state.email)?<Text>Valid Email</Text>:<Text>Invalid input</Text>} 

        <View style={{flexDirection:'row',backgroundColor:'white',borderColor:'grey',borderWidth:1,marginHorizontal:20,borderRadius:100,marginTop:30,shadowColor:'black',shadowOpacity:0.5,shadowColor:'grey',elevation:5}}>
        <TouchableOpacity>
                <Image source={require('../assets/images/arrowLeft.png')}></Image>
            </TouchableOpacity>
           
            <TextInput
            placeholder='password'
            secureTextEntry={!this.state.showPassword}
            onChangeText={this.handlePhonenumber}
            value={this.state.phonenumber}
            keyboardType='number-pad'
            style={{flex:1}}></TextInput>
            
            <TouchableOpacity onPress={this.togglePassword}>
          
            {this.state.showPassword ? <Image source={require('../assets/images/show_passoword.png')}></Image> : <Image source={require('../assets/images/hide_password.png')}></Image>}
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}