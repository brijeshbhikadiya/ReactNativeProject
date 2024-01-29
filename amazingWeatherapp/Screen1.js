// import { Text, View } from 'react-native'
// import React, { Component } from 'react'

// export default class One extends Component {
//   render() {
//     return (
//      <View style={
//         {
//             flex:1,
//             //backgroundColor:'red'
//         }
//      }>
//         <View style={
//             {
//                 flexDirection:'row',
//                 //backgroundColor:'yellow'
//             }
//         }>
//         <View style={
//             {
//             justifyContent:'center',
//             alignItems:'center',
//             height:100,
//             width:100,
//             marginTop:44,
//             backgroundColor:'#D9D9D9'
//              }
//         }>
//         <Text style={
//             {
//                 width:24,
//                 height:15,
//                 fontWeight:'400',
//                 fontSize:12,
//                 color:'#000000'
//             }
//         }>One</Text>
   
//       </View>

//       <View style={
//             {
//             justifyContent:'center',
//             alignItems:'center',
//             height:100,
//             width:100,
//             marginTop:44,
//             marginLeft:190,
//             backgroundColor:'#DD99DD'
//              }
//         }>
//         <Text style={
//             {
//                 width:24,
//                 height:15,
//                 fontWeight:'400',
//                 fontSize:12,
//                 color:'#000000'
//             }
//         }>Two</Text>
//       </View>
//         </View>
        

//       <View style={
//             {
//             justifyContent:'center',
//             alignItems:'center',
//             height:100,
//             width:100,
//             marginTop:100,
//             marginLeft:146,
//             marginStart:144,
//             backgroundColor:'#DD23BD'
//              }
//         }>
//         <Text style={
//             {
//                 width:34,
//                 height:15,
//                 fontWeight:'400',
//                 fontSize:12,
//                 color:'#FFFFFF'
//             }
//         }>Three</Text>
//       </View>

//       <View style={
//             {
//             // justifyContent:'center',
//             // alignItems:'center',
//             height:100,
//             width:100,
//             marginTop:150,
//             marginLeft:146,
//             marginStart:144,
//             backgroundColor:'#DD23BD'
//              }
//         }>
//             <View style={
//                 {
//                     marginTop:10,
//                     marginLeft:10
//                 }
//             }>
//             <Text style={
//             {
//                 width:26,
//                 height:15,
//                 fontWeight:'400',
//                 fontSize:12,
                
//                 color:'#FFFFFF'
//             }
//         }>Four</Text>
//             </View>
        
//           <View style={
//             {
//                 marginTop:60,
//                 marginLeft:70,
//                 marginRight:10,
//                 marginBottom:10
//             }
//           }>
//             <Text style={
//                 {
//                 width:24,
//                 height:15,
//                 fontWeight:'400',
//                 fontSize:12,
//                 color:'#FFFFFF'
//                 }
//             }>Five</Text>
//           </View>
//       </View>

//       <View style={
//             {
//                 flex:1,
//                 flexDirection:'row',
//                // backgroundColor:'yellow'
//             }
//         }>
//         <View style={
//             {
//             // justifyContent:'center',
//             // alignItems:'center',
//             height:100,
//             width:100,
//             marginTop:64,
//             backgroundColor:'#D9D9D9'
//              }
//         }>
        
//         <View>
//             <View style={
//                 {
//                     marginTop:10,
//                     marginLeft:10
//                 }
//             }>
//             <Text style={
//             {
//                 width:24,
//                 height:15,
//                 fontWeight:'400',
//                 fontSize:12,
//                 color:'#000000'
//             }
//         }>Six</Text>
//             </View>
         
//          <View style={
//             {
//                marginLeft:30,
//                marginTop:20
//             }
//          }>
//          <Text style={
//             {
//                 width:39,
//                 height:15,
//                 fontWeight:'400',
//                 fontSize:12,
//                 color:'#000000'
//             }
//         }>Seven</Text>
//          </View>

//          <View style={
//             {
//                 marginLeft:70,
//                 marginTop:20,
//                 marginRight:20,
//                 marginBottom:10
//             }
//          }>
//          <Text style={
//             {
//                 width:30,
//                 height:20,
//                 fontWeight:'400',
//                 fontSize:12,
//                 color:'#000000'
//             }
//         }>Eight</Text>
//          </View>
          
         
//         </View>
        
   
//       </View>

//       <View style={
//             {
//             justifyContent:'center',
//             alignItems:'center',
//             height:100,
//             width:100,
//             marginTop:64,
//             marginLeft:190,
//             backgroundColor:'#DD99DD'
//              }
//         }>
//         <Text style={
//             {
//                 width:26,
//                 height:15,
//                 fontWeight:'400',
//                 fontSize:12,
//                 color:'#000000'
//             }
//         }>Nine</Text>
//       </View>
//         </View>
        
//     </View>
//     )
//   }
// }

import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class Screen1 extends Component {
  render() {
    return (
      <View style={
        {
            flex:1,
           // backgroundColor:'red',
            flexDirection:'row'
        }
      }>
       <View style={
        {
            flex:1,
           // backgroundColor:'yellow',
            flexDirection:'column',
            justifyContent:'space-between'
        }
       }>
        <View style={
            {
                height:100,
                width:100,
                marginTop:12,
                backgroundColor:'#D9D9D9',
                justifyContent:'center',
                alignItems:'center'
            }
        }>
            <Text>One</Text>
        </View>
        <View  style={
            {
                height:100,
                width:100,
                backgroundColor:'#D9D9D9'
            }
        }>
            <View style={
                {
                    flex:1,
                    //backgroundColor:'pink'
                }
            }>
                <View style={
                    {
                        flex:1
                    }
                }>
                    <Text style={
                        {
                            margin:5
                        }
                    }>Six</Text>
                </View>
                <View style={
                    {
                        flex:1,
                        justifyContent:'center',
                        alignItems:'center'
                    }
                }>
                     <Text>Seven</Text>
                </View>
                <View style={
                    {
                        flex:1,
                        justifyContent:'flex-end',
                        alignItems:'flex-end'
                    }
                }>
                     <Text>Eight</Text>
                </View>
            </View>
        </View>
       </View>
       <View style={
        {
            flex:1,
            justifyContent:'space-around',
           // backgroundColor:'blue'
        }
       }>
         <View style={
            {
                height:100,
                width:100,
                marginTop:70,
                marginLeft:15,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#DD23BD'
            }
        }>
            <Text style={
                {
                    color:'#FFFFFF'
                }
            }>Three</Text>
        </View>
        <View  style={
            {
                height:100,
                width:100,
                marginLeft:15,
                marginBottom:50,
                backgroundColor:'#DD23BD'
            }
        }>
            <Text style={
                {
                    margin:5,
                    color:'#FFFFFF'
                }
            }>Four</Text>
           <View style={
            {
                flex:1,
               // backgroundColor:'pink',
                justifyContent:'flex-end',
                alignItems:'flex-end'
            }
            
           }>
            <Text style={
                {
                    margin:5,
                    color:'#FFFFFF'
                }
            }>Five</Text>
           </View>
        </View>
       </View>
       <View style={
        {
            flex:1,
            justifyContent:'space-between', 
           // backgroundColor:'green'
          
        }
       }>
         <View style={
            {
                height:100,
                width:100,
                marginTop:12,
                marginLeft:30,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#DD99DD'
            }
        }>
            <Text>Two</Text>
        </View>
        <View  style={
            {
                height:100,
                width:100,
                marginLeft:30,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#DD99DD'
            }
        }>
            <Text>Nine</Text>
        </View>
       </View>
       
      </View>
      
    )
  }
}