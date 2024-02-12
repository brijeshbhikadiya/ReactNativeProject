

// // import { StyleSheet, Text, TextInput, View } from 'react-native'
// // import React, { Component } from 'react'

// // export default class Screen2_1 extends Component {
// //     constructor()
// //     {
// //         super()
// //         this.state={
// //             firstname:"",
// //             lastname:"",
// //             age:"",
// //             phonenumber:"",
// //             email:""
// //         }
// //     }
  
// //   render() {
// //     const isEmailValid=(text)=>{
// //         const emailPattern=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
// //         return emailPattern.test(text);
// //     };
// //     return (
// //       <View style={styles.container}>
// //         <View style={[styles.card,styles.shadow]}>
// //             <TextInput style={styles.t1}
// //             placeholder='First Name'
// //             placeholderTextColor={'#808080'}
// //             onChangeText={(text)=>{
// //                 this.setState({firstname:text})
// //             }}>
// //             </TextInput>
// //         </View>
// //         <Text style={
// //                 {
// //                     fontSize:14,
// //                     color:'#000000',
// //                     marginLeft:10,
// //                     marginTop:5
// //                 }
// //             }>{this.state.firstname}</Text>
// //         <View style={
// //             {
// //                 marginTop:8,
// //                 //borderColor:'#FFFFFF',
// //                 //borderWidth:0.3,
// //                // shadowColor:'grey',
// //                 //shadowRadius:3,
// //                 // borderRadius:10,
// //                 // borderColor:'red',
// //                 // shadowColor:'rgba(0, 0, 0, 0.25)',
// //                 //shadowOpacity:0.5,
// //                 //shadowOffset:{width:0,height:0},
// //                 //elevation:2
// //                // backgroundColor:'#d9d9d9',
// //     shadowColor: "rgba(0, 0, 0, 0.25)",
// //     backgroundColor:'white',
// //     shadowOpacity: 0.8,
// //     shadowRadius: 2,
// //     borderRadius:10,
// //     borderWidth:0.5,
// //     shadowOffset: {
// //       height: 8,
// //       width: 8
// //     },
// //     elevation:5
// //             }
// //         }>
// //             <TextInput style={
// //                 {
// //                     width:360,
// //                     height:52,
// //                    // borderWidth:1,
// //                     borderRadius:12,
// //                     //marginTop:52,
// //                     //marginLeft:10,
// //                     paddingLeft:15,
// //                     //shadowOpacity:70
// //                 }
// //             }
// //             placeholder='Last Name'
// //             placeholderTextColor={'#808080'}
// //             onChangeText={(text)=>{
// //                 this.setState({lastname:text})
// //             }}>
// //             </TextInput>
           
// //         </View>
// //         <Text style={
// //                 {
// //                     fontSize:14,
// //                     color:'#000000',
// //                     marginLeft:10,
// //                     marginTop:5
// //                 }
// //             }>{this.state.lastname}</Text>
// //         <View style={
// //             {
// //                 borderColor:'#FFFFFF',
// //                 marginTop:8,
// //                 borderWidth:0.3,
// //                 shadowColor:'grey',
// //                 shadowRadius:3,
// //                 shadowColor:'#171717',
// //                 shadowOpacity:0.5,
// //                 shadowOffset:{width:0,height:0},
// //                 elevation:2
// //             }
// //         }> 
// //             <TextInput style={
// //                 {
// //                     width:360,
// //                     height:52,
// //                    // borderWidth:1,
// //                     borderRadius:12,
// //                     //marginTop:52,
// //                     //marginLeft:10,
// //                     paddingLeft:15,
// //                     //shadowOpacity:70

// //                 }
// //             }
// //             placeholder='Phone Number'
// //             placeholderTextColor={'#808080'}
// //             onChangeText={(text)=>{
// //                 this.setState({phonenumber:text})
// //             }}>
// //             </TextInput>
           
// //         </View>
// //         <Text style={
// //                 {
// //                     fontSize:14,
// //                     color:'#000000',
// //                     marginLeft:10,
// //                     marginTop:5
// //                 }
// //             }>{this.state.phonenumber}</Text>
// //         <View style={
// //             {
// //                 borderColor:'#FFFFFF',
// //                 borderWidth:0.3,
// //                 marginTop:8,
// //                 shadowColor:'grey',
// //                 shadowRadius:3,
// //                 shadowColor:'#171717',
// //                 shadowOpacity:0.5,
// //                 shadowOffset:{width:0,height:0},
// //                 elevation:2
// //             }
// //         }>
// //             <TextInput style={
// //                 {
// //                     width:360,
// //                     height:52,
// //                    // borderWidth:1,
// //                     borderRadius:12,
// //                     //marginTop:52,
// //                     //marginLeft:10,
// //                     paddingLeft:15,
// //                     //shadowOpacity:70

// //                 }
// //             }
// //             placeholder='Age'
// //             placeholderTextColor={'#808080'}
// //             onChangeText={(text)=>{
// //                 this.setState({age:text})
// //             }}>
// //             </TextInput>
          
// //         </View>
// //         <Text style={
// //                 {
// //                     fontSize:14,
// //                     color:'#000000',
// //                     marginLeft:10,
// //                     marginTop:5
// //                 }
// //             }>{this.state.age}</Text>
// //         <View style={
// //             {
// //                 borderColor:'#FFFFFF',
// //                 borderWidth:0.3,
// //                 shadowColor:'grey',
// //                 shadowRadius:3,
// //                 marginTop:8,
// //                 shadowColor:'#171717',
// //                 shadowOpacity:0.5,
// //                 shadowOffset:{width:0,height:0},
// //                 elevation:2
// //             }
// //         }>
// //             <TextInput style={
// //                 {
// //                     width:360,
// //                     height:52,
// //                    // borderWidth:1,
// //                     borderRadius:12,
// //                     //marginTop:52,
// //                     //marginLeft:10,
// //                     paddingLeft:15,
// //                     //shadowOpacity:70

// //                 }
// //             }
// //             placeholder='Email'
// //             placeholderTextColor={'#808080'}
// //             onChangeText={(text)=>{
// //                 this.setState({email:text})
// //             }}>
// //             </TextInput>
            
// //         </View>
        
// //         <Text style={
// //                 {
// //                     fontSize:14,
// //                     color:'#000000',
// //                     marginLeft:10,
// //                     marginTop:5
// //                 }
// //             }>{this.state.email==""?null:isEmailValid(this.state.email)?<Text style={
// //                  {
// //                          color:'green'
// //                      }
// //                  }>Valid email!!!!</Text>:<Text style={
// //                          {
// //                              color:'red'
// //                          }
// //                      }>invalid email!!!!</Text>}</Text>
// //       </View>
      
// //     )
    
// //   }
// // }
// // const styles=StyleSheet.create({
// //     container:{
// //         flex:1,
// //         marginHorizontal:25,
// //         marginVertical:30,
        
// //     },
// //     card:{
// //         borderRadius:8,
// //         borderColor:'white',
// //         borderWidth:0.1,
        
// //     },
// //     shadow:{
      
// //         shadowColor:'gray',
// //         shadowRadius:3,
// //         shadowOpacity:0.7,
// //         shadowOffset:{width:0,height:0},
// //         elevation:2
// //     },
// //     t1: {
// //         color:"#000000",
// //         height:52,
// //         width:360,
// //         fontSize:18,
// //         paddingLeft:15,
// //     },
// // })








// // // {!isEmailValid(this.state.email)?<Text style={
// // //     {
// // //         color:'red'
// // //     }
// // // }>invalid email!!!!</Text>:<Text style={
// // //     {
// // //         color:'green'
// // //     }
// // // }>Valid email!!!!</Text>}

// // import { StyleSheet,Text, TextInput, View } from 'react-native'
// // import React, { Component} from 'react'

// // export default class fillForm extends Component {
// //     constructor()
// //     {
// //         super()
// //         this.state={
// //             txtfname : "",
// //             txtlname : "",
// //             txtpnumber : "",
// //             txtage : "",
// //             txtemail: ""
// //         }
        
// //     }
// //     render() {
// //         //function to check email
// //         const handleEmail = (txt) => {
// //             let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

// //             return regex.test(String(txt).toLowerCase())
// //         };
// //     return (
// //       <View style={styles.container}>
// //         <View style={[styles.card,styles.shadow]}>
// //         <TextInput 
// //             placeholder='First Name'
// //             style={styles.t1}
// //             keyboardType='default'
// //             onChangeText={(txt) => {this.setState({txtfname:txt})} 
// //             }>
// //         </TextInput>
// //         </View>
// //         <Text style={styles.txtstyle}>{this.state.txtfname}</Text>
// //         <View style={[styles.card,styles.shadow]}>
// //         <TextInput 
// //             placeholder='Last Name'
// //             style={styles.t2}
// //             onChangeText={(txt) => {this.setState({txtlname:txt})}}
// //         >
// //         </TextInput>
// //         </View>
// //         <Text style={styles.txtstyle}>{this.state.txtlname}</Text>
// //         <View style={[styles.card,styles.shadow]}>
// //         <TextInput 
// //             placeholder='Phone Number'
// //             style={styles.t3}
// //             keyboardType='number-pad'
// //             onChangeText={(txt) => {this.setState({txtpnumber:txt})}}
// //         >
// //         </TextInput>
// //         </View>
// //         <Text style={styles.txtstyle}>{this.state.txtpnumber}</Text>

// //         <View style={[styles.card,styles.shadow]}>
// //         <TextInput 
// //             placeholder='Age'
// //             style={styles.t4}
// //             keyboardType='number-pad'
// //             onChangeText={(txt) => {this.setState({txtage:txt})}}
// //         >
// //         </TextInput>
// //         </View>
// //         <Text style={styles.txtstyle}>{this.state.txtage}</Text>
// //         <View style={[styles.card,styles.shadow]}>
// //         <TextInput 
// //             placeholder='Email'
// //             style={styles.t5}
// //             keyboardType='email-address'
// //             onChangeText={(txt) => {this.setState({txtemail:txt})}}
// //         >
// //         </TextInput>
// //         </View>
// //         <Text>{!handleEmail(this.state.txtemail) ? <Text style={{color:'red'}}>Invalid Email!!!!</Text> : <Text style={{color:'green'}}>Valid Email!!!!</Text>}
// //         </Text>
// //       </View>
// //     )
// //   }
// // }
// // const styles = StyleSheet.create({
// //     container:{
// //         flex:1,
// //         marginHorizontal:25,
// //         marginVertical:30,
        
// //     },
// //     //for shadow
// //     card:{
// //         borderRadius:12,
// //         borderColor:'#FFFFFF',
// //         borderWidth:0.3,
// //     },
// //     shadow:{
// //         shadowColor:'gray',
// //         shadowRadius:3,
// //         shadowOpacity:0.5,
// //         shadowOffset:{width:0,height:0},
// //         elevation:2
// //     },
// //     //for textInput
// //     t1: {
// //         color:"#000000",
// //         height:52,
// //         width:360,
// //         fontSize:18,
// //         paddingLeft:17,
// //     },
// //     txtstyle:{
// //         fontSize:18,
// //         color:"#000000"
// //     },
// //     t2: {
// //         color:"#000000",
// //         height:52,
// //         width:360,
// //         fontSize:18,
// //         paddingLeft:17,
// //     },
// //     t3: {
// //         color:"#000000",
// //         height:52,
// //         width:360,
// //         fontSize:18,
// //         paddingLeft:17,
// //     },
// //     t4: {
// //         color:"#000000",
// //         height:52,
// //         width:360,
// //         fontSize:18,
// //         paddingLeft:17,
// //     },
// //     t5: {
// //         color:"#000000",
// //         height:52,
// //         width:360,
// //         fontSize:18,
// //         paddingLeft:17,
// //     },
// // })


// // import React, { useState } from 'react';
// // import { View, TextInput, StyleSheet } from 'react-native';

// // const App = () => {
// //   const [firstName, setFirstName] = useState('');
// //   const [lastName, setLastName] = useState('');
// //   const [age, setAge] = useState('');

// //   return (
// //     <View style={styles.container}>
// //       <TextInput
// //         style={styles.input}
// //         placeholder="First Name"
// //         value={firstName}
// //         onChangeText={(text) => setFirstName(text)}
// //       />

// //       <TextInput
// //         style={styles.input}
// //         placeholder="Last Name"
// //         value={lastName}
// //         onChangeText={(text) => setLastName(text)}
// //       />

// //       <TextInput
// //         style={styles.input}
// //         placeholder="Age"
// //         value={age}
// //         onChangeText={(text) => setAge(text)}
// //         keyboardType="numeric" // To show numeric keyboard
// //       />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     padding: 20,
// //   },
// //   input: {
// //     height: 40,
// //     borderColor: 'gray',
// //     borderWidth: 1,
// //     borderRadius: 8,
// //     paddingLeft: 10,
// //     marginBottom: 16,
// //     shadowColor: '#000',
// //     shadowOffset: {
// //       width: 0,
// //       height: 2,
// //     },
// //     shadowOpacity: 0.2,
// //     shadowRadius: 2,
// //     elevation: 2, // For Android shadow
// //   },
// // });

// // export default App;
// import { StyleSheet, Text, TextInput, View } from 'react-native'
// import React, { Component } from 'react'

// export default class demo extends Component {
//     constructor()
//     {
//         super()
//         this.state={
//             firstname:"",
//             lastname:"",
//             age:"",
//             phonenumber:"",
//             email:""
//         }
//     }
  
//   render() {
//     const isEmailValid=(text)=>{
//         const emailPattern=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
//         return emailPattern.test(text);
//     };
//     return (
//       <View style={styles.container}>
//         <View style={[styles.card,styles.shadow]}>
//             <TextInput style={styles.t1}
//             placeholder='First Name'
//             placeholderTextColor={'#808080'}
//             onChangeText={(text)=>{
//                 this.setState({firstname:text})
//             }}>
//             </TextInput>
//         </View>
//         <Text style={
//                 {
//                     fontSize:14,
//                     color:'#000000',
//                     marginLeft:10,
//                     marginTop:5
//                 }
//             }>{this.state.firstname}</Text>
//         <View style={[styles.card,styles.shadow]}>
//             <TextInput style={
//                 {
//                     width:360,
//                     height:52,
//                     paddingLeft:15,
//                 }
//             }
//             placeholder='Last Name'
//             placeholderTextColor={'#808080'}
//             onChangeText={(text)=>{
//                 this.setState({lastname:text})
//             }}>
//             </TextInput>
           
//         </View>
//         <Text style={
//                 {
//                     fontSize:14,
//                     color:'#000000',
//                     marginLeft:10,
//                     marginTop:5
//                 }
//             }>{this.state.lastname}</Text>
//         <View style={[styles.card,styles.shadow]}>
//             <TextInput style={
//                 {
//                     width:360,
//                     height:52,
//                     paddingLeft:15,

//                 }
//             }
//             placeholder='Phone Number'
//             placeholderTextColor={'#808080'}
//             onChangeText={(text)=>{
//                 this.setState({phonenumber:text})
//             }}>
//             </TextInput>
           
//         </View>
//         <Text style={
//                 {
//                     fontSize:14,
//                     color:'#000000',
//                     marginLeft:10,
//                     marginTop:5
//                 }
//             }>{this.state.phonenumber}</Text>
//             <View style={[styles.card,styles.shadow]}>
//             <TextInput style={
//                 {
//                     width:360,
//                     height:52,
//                    // borderWidth:1,
//                     borderRadius:12,
//                     //marginTop:52,
//                     //marginLeft:10,
//                     paddingLeft:15,
//                     //shadowOpacity:70

//                 }
//             }
//             placeholder='Age'
//             placeholderTextColor={'#808080'}
//             onChangeText={(text)=>{
//                 this.setState({age:text})
//             }}>
//             </TextInput>
          
//         </View>
//         <Text style={
//                 {
//                     fontSize:14,
//                     color:'#000000',
//                     marginLeft:10,
//                     marginTop:5
//                 }
//             }>{this.state.age}</Text>
//             <View style={[styles.card,styles.shadow]}>
//             <TextInput style={
//                 {
//                     width:360,
//                     height:52,
//                    // borderWidth:1,
//                     borderRadius:12,
//                     //marginTop:52,
//                     //marginLeft:10,
//                     paddingLeft:15,
//                     //shadowOpacity:70

//                 }
//             }
//             placeholder='Email'
//             placeholderTextColor={'#808080'}
//             onChangeText={(text)=>{
//                 this.setState({email:text})
//             }}>
//             </TextInput>
            
//         </View>
        
//         <Text style={
//                 {
//                     fontSize:14,
//                     color:'#000000',
//                     marginLeft:10,
//                     marginTop:5
//                 }
//             }>{this.state.email==""?null:isEmailValid(this.state.email)?<Text style={
//                  {
//                          color:'green'
//                      }
//                  }>Valid email!!!!</Text>:<Text style={
//                          {
//                              color:'red'
//                          }
//                      }>invalid email!!!!</Text>}</Text>
//       </View>
      
//     )
    
//   }
// }
// const styles=StyleSheet.create({
//     container:{


//         flex:1,
//         marginHorizontal:25,
//         marginVertical:30,
        
//     },
//     card:{

//         shadowColor:'gray',
//         shadowRadius:3,
//         shadowOpacity:0.7,
//         shadowOffset:{width:0,height:0},
//         elevation:1,
//         borderRadius:12,
//         borderColor:'white',
//        // borderWidth:0.1,
        
//     },
//     shadow:{


      
       
//     },
//     t1: {
//         color:"#000000",
//         height:52,
//         width:360,
//         fontSize:18,
//         paddingLeft:15,
//     },
// })

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
    //shadowColor:'gray',
    shadowOpacity:0.7,
    shadowOffset:{height:5,width:5},
    elevation:5,
    shadowColor:'#000000'

   },
   t2:{
    color:"black",
    // width:330,
    height:52,
    paddingLeft:17,
    borderRadius:20,
    backgroundColor:'white'
   
   },
   t3:{
    color:"black",
    // width:330,
    height:52,
    paddingLeft:17,
    borderRadius:20,
    backgroundColor:'white'
   },
   t4:{
    color:"black",
    // width:330,
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