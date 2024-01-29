
// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// const MyComponent = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.subview}>
//         {/* Content for the first view */}
//       </View>
//       <View style={styles.subview}>
//         {/* Content for the second view */}
//       </View>
//       <View style={styles.subview}>
//         {/* Content for the third view */}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, // This makes the container take the full width of the screen
//     flexDirection: 'row', // Set flexDirection to 'row' for horizontal arrangement
//     justifyContent: 'space-between', // Distribute views evenly along the horizontal axis
//     padding: 10, // Optional padding
//   },
//   subview: {
//     flex: 1, // Each subview takes equal space
//     backgroundColor: 'lightgray', // Optional background color
//     marginRight: 10, // Optional margin between subviews
//   },
// });

// export default MyComponent;

import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class Screen2 extends Component {
  render() {
    return (
      <View style={
        {
          flex:1,
          flexDirection:'row'
        }
      }>
        <View style={
          {
            flex:1,
            //backgroundColor:'yellow',
            marginTop:12
          }
        }>
          <View style={
            {
              height:100,
              width:100,
              backgroundColor:'#D9D9D9'
            }
          }>

          </View>
        </View>
        <View style={
          {
            flex:1,
            //backgroundColor:'red',
            justifyContent:'center'
          }
        }>
          <View style={
            {
              height:100,
              width:100,
              backgroundColor:'#DD23BD'
            }
          }>

          </View>
        </View>
        <View style={
          {
            flex:1,
           // backgroundColor:'blue',
            justifyContent:'flex-end',
          
          }
        }>
          <View style={
            {
              height:100,
              width:100,
              backgroundColor:'#DD99DD',
              marginLeft:30
            }
          }>

          </View>
        </View>
      </View>
    )
  }
}

