import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class Screen5 extends Component {
  render() {
    return (
      <View style={
        {
            flex:1,
            justifyContent:'center'
        }
      }>
       <View style={
        {
            height:100,
            width:100,
            backgroundColor:'#D9D9D9',
            marginBottom:60,
            marginLeft:86,
            //marginTop:-70
        }
       }>
        <View style={
            {
                height:100,
                 width:100,
                backgroundColor:'#FFEEDD',
                marginLeft:35,
                marginTop:50
            }
        }>
            <View style={
                {
                    height:100,
                    width:100,
                    backgroundColor:'#DDFF88',
                    marginLeft:50,
                    marginTop:50
                }
            }></View>
        </View>
       </View>
      </View>
    )
  }
}

// import { StyleSheet, Text, View } from 'react-native'
// import React, { Component } from 'react'

// export default class screen5 extends Component {
//   render() {
//     return (
//     <View style={styles.container}>
//         <View style={styles.v1}>
//             <View style={styles.v2}>
//             <View style={styles.v3}></View>

//             </View>
//         </View>
//     </View>
        
//     )
//   }
// }
// const styles=StyleSheet.create({

//     container:{

//     flex:1,
//     justifyContent:'center'
//     },
//     v1:{

//         height:100,
//         width:100,
//         backgroundColor:'#D9D9D9',
//        //alignSelf:"center",
//        //marginHorizontal:100,
//        marginBottom:60,
//        marginLeft:86,
//        marginTop:-70,

      
      
      
       
//     },
//     v2:{

//         height:100,
//         width:100,
//         backgroundColor:'#FFEEDD',
//         marginLeft:35,
//         marginTop:50,

       
//     },
//     v3:{

//         height:100,
//         width:100,
//         backgroundColor:'#DDFF88',
//         marginLeft:50,
//         marginTop:50,
//     }
// })