
import { StyleSheet, Text, TextInput, View, StatusBar, } from 'react-native'
import React, { Component } from 'react'

export default class task1 extends Component {
  
    constructor()
    {super()
        this.state={
            fname:"",
            lname:"",
            phone:"",
            age:"",
            email:"",
        } 
    }

    
    render() {
    const vEmail=(email)=>{
      const ex=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
      return ex.test(String(email).toLowerCase())
      
    }
   
    return (
      
      <View style={styles.container}>
      <StatusBar
      backgroundColor="transparent"
      translucent={true}
      />
          <View style={[styles.s,styles.s1]}>
          <TextInput style={styles.t1} onChangeText={(text)=>{this.setState({fname:text})}} placeholder='First Name' placeholderTextColor={"black"} inputMode='text'></TextInput>
          </View>
          <Text style={{marginLeft:10,color:'black'}}>{this.state.fname}</Text>
          <View style={[styles.s,styles.s1]}>
          <TextInput placeholder='Last Name'style={styles.t2} onChangeText={(text)=>{this.setState({lname:text})}} placeholderTextColor={"black"}>
          </TextInput>
          </View>
          <Text style={{marginLeft:10,color:'black'}}>{this.state.lname}
          </Text>

        <View style={[styles.s,styles.s1]}>   
          <TextInput placeholder='Phone Number'style={styles.t3} onChangeText={(number)=>{this.setState({phone:number})}} keyboardType='number-pad' placeholderTextColor={"black"}>
          </TextInput>
        </View>
          <Text style={{marginLeft:10,color:'black'}}>{this.state.phone}</Text> 
        
        <View style={[styles.s,styles.s1]}>
          <TextInput placeholder='Age'style={styles.t4} onChangeText={(number)=>{this.setState({age:number})}} keyboardType='number-pad' placeholderTextColor={"black"}>
          </TextInput>
        </View>
          <Text style={{marginLeft:10,color:'black'}}>{this.state.age}</Text>
        <View style={[styles.s,styles.s1]}>
          <TextInput placeholder='Email'style={styles.t5} onChangeText={(text)=>{this.setState({email:text})}} placeholderTextColor={"black"}></TextInput>
        </View>
        {this.state.email == ""?null:vEmail(this.state.email)?<Text style={{color:'green',marginTop:8}}>Valid Email!!!!</Text>:<Text style={{color:'red',marginTop:8}}>InValid Email!!!!!</Text>}
         {/* <Text style={{color:'black'}}>{vEmail(this.state.email)?
        <Text style={{color:'green',marginTop:8}}>ValidEmail!!!!</Text>:
        <Text style={{color:'red',marginTop:8}}>InValidEmail!!!!</Text>}</Text> */}
      </View>
    )
  }
}
const styles=StyleSheet.create({
container:{
    flex:1,
    marginHorizontal:15,
    marginVertical:30,
    
},
t1:{
  color:"black",
  // width:330,
  height:52,
  paddingLeft:17,
  borderRadius:20,
  backgroundColor:'white'
  },
   s:{
     borderWidth:0.1,
     borderColor:'black',
     borderRadius:20,
   },
   s1:{
   
    shadowRadius:3,
    shadowColor:'gray',
    shadowOpacity:0.7,
    shadowOffset:{height:5,width:5},
    elevation:5,
    shadowColor:'#000000'

   },
   t2:{
    color:"black",
   
    height:52,
    paddingLeft:17,
    borderRadius:20,
    backgroundColor:'white'
   
   },
   t3:{
    color:"black",
    height:52,
    paddingLeft:17,
    borderRadius:20,
    backgroundColor:'white'
   },
   t4:{
    color:"black",
    height:52,
    paddingLeft:17,
    borderRadius:20,
    backgroundColor:'white'
   },
       t5:{
        color:"black",
        // width:330,
        height:52,
        paddingLeft:17,
        borderRadius:20,
        backgroundColor:'white'
   }

})

//Functional Component
// import React, { useState } from 'react';
// import { StyleSheet, Text, TextInput, View, StatusBar } from 'react-native';

// const Task1 = () => {
//   const [fname, setFname] = useState('');
//   const [lname, setLname] = useState('');
//   const [phone, setPhone] = useState('');
//   const [age, setAge] = useState('');
//   const [email, setEmail] = useState('');

//   const vEmail = (email) => {
//     const ex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
//     return ex.test(String(email).toLowerCase());
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar backgroundColor="transparent" translucent={true} />
//       <View style={[styles.s, styles.s1]}>
//         <TextInput
//           style={styles.t1}
//           onChangeText={(text) => setFname(text)}
//           placeholder="First Name"
//           placeholderTextColor="black"
//           inputMode="text"
//         />
//       </View>
//       <Text style={{ marginLeft: 10, color: 'black' }}>{fname}</Text>
//       <View style={[styles.s, styles.s1]}>
//         <TextInput
//           placeholder="Last Name"
//           style={styles.t2}
//           onChangeText={(text) => setLname(text)}
//           placeholderTextColor="black"
//         />
//       </View>
//       <Text style={{ marginLeft: 10, color: 'black' }}>{lname}</Text>

//       <View style={[styles.s, styles.s1]}>
//         <TextInput
//           placeholder="Phone Number"
//           style={styles.t3}
//           onChangeText={(number) => setPhone(number)}
//           keyboardType="number-pad"
//           placeholderTextColor="black"
//         />
//       </View>
//       <Text style={{ marginLeft: 10, color: 'black' }}>{phone}</Text>

//       <View style={[styles.s, styles.s1]}>
//         <TextInput
//           placeholder="Age"
//           style={styles.t4}
//           onChangeText={(number) => setAge(number)}
//           keyboardType="number-pad"
//           placeholderTextColor="black"
//         />
//       </View>
//       <Text style={{ marginLeft: 10, color: 'black' }}>{age}</Text>

//       <View style={[styles.s, styles.s1]}>
//         <TextInput
//           placeholder="Email"
//           style={styles.t5}
//           onChangeText={(text) => setEmail(text)}
//           placeholderTextColor="black"
//         />
//       </View>
//       {email === '' ? null : vEmail(email) ? (
//         <Text style={{ color: 'green', marginTop: 8 }}>Valid Email!!!!</Text>
//       ) : (
//         <Text style={{ color: 'red', marginTop: 8 }}>Invalid Email!!!!!</Text>
//       )}
//     </View>
//   );
// };

// export default Task1;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginHorizontal: 15,
//     marginVertical: 30,
//   },
//   t1: {
//     color: 'black',
//     height: 52,
//     paddingLeft: 17,
//     borderRadius: 20,
//     backgroundColor: 'white',
//   },
//   s: {
//     borderWidth: 0.1,
//     borderColor: 'black',
//     borderRadius: 20,
//   },
//   s1: {
//     shadowRadius: 3,
//     shadowColor: 'gray',
//     shadowOpacity: 0.7,
//     shadowOffset: { height: 5, width: 5 },
//     elevation: 5,
//     shadowColor: '#000000',
//   },
//   t2: {
//     color: 'black',
//     height: 52,
//     paddingLeft: 17,
//     borderRadius: 20,
//     backgroundColor: 'white',
//   },
//   t3: {
//     color: 'black',
//     height: 52,
//     paddingLeft: 17,
//     borderRadius: 20,
//     backgroundColor: 'white',
//   },
//   t4: {
//     color: 'black',
//     height: 52,
//     paddingLeft: 17,
//     borderRadius: 20,
//     backgroundColor: 'white',
//   },
//   t5: {
//     color: 'black',
//     height: 52,
//     paddingLeft: 17,
//     borderRadius: 20,
//     backgroundColor: 'white',
//   },
// });