// // import { Text, View,StyleSheet, TouchableOpacity,Animated, ScrollView } from 'react-native'
// // import React, { Component } from 'react'

// // export default class Checkout3 extends Component {
// //     constructor(){
// //         super()
// //         this.state={
// //             progress1: new Animated.Value(0),
// //             progress2: new Animated.Value(0),
// //         }
// //     }
    
// //     start1=()=>{ 
// //         Animated.timing(this.state.progress1, {
// //             toValue: 36,
// //             duration: 1000,
// //             useNativeDriver: false,
// //           }).start();
// //     }
   
// //     start2 = () => {
// //         Animated.timing(this.state.progress2, {
// //           toValue: 36,
// //           duration: 1000,
// //           useNativeDriver: false,
// //         }).start();
// //       };

// //   render() {
// //     return (
// //       <View style={styles.container}>
// //         <ScrollView>
// //         <View style={{flexDirection:'row',marginHorizontal:100,justifyContent:'space-between',marginTop:300}}>
// //             <View style={styles.firstround}></View>
// //             <View style={styles.firstround}></View>
// //             <View style={styles.firstround}></View>
// //         </View>
        
// //         <Animated.View style={{height:36,width:this.state.progress1,backgroundColor:'red',borderRadius:100,marginHorizontal:100,position:'absolute',top:300}}></Animated.View>
// //         <Animated.View style={{height:36,width:this.state.progress2,backgroundColor:'red',borderRadius:100,marginHorizontal:100,position:'absolute',top:300,right:100}}></Animated.View>
// //         <View style={{flexDirection:'row',marginHorizontal:100,justifyContent:'space-around',marginTop:20}}>
// //             <TouchableOpacity style={{borderWidth:1,paddingHorizontal:10,paddingVertical:5}}>
// //                 <Text>Prev</Text>
// //             </TouchableOpacity>
// //             <TouchableOpacity style={{borderWidth:1,paddingHorizontal:10,paddingVertical:5}} onPress={this.state.progress1?this.start2:this.start2}>
// //                 <Text>Next</Text>
// //             </TouchableOpacity>
// //         </View>
// //         </ScrollView>
// //       </View>
// //     )
// //   }
// // }

// // const styles = StyleSheet.create({
// //     container:{
// //         flex:1
// //     },
// //     firstround:{
// //         borderWidth:1,
// //         height:36,
// //         width:36,
// //         borderRadius:100
// //     }
// // })

// import React, { useState, useRef } from 'react';
// import { View, Animated, TouchableOpacity,Text } from 'react-native';

// const App = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const translationX = useRef(new Animated.Value(0)).current;

//   const handleNext = () => {
//     if (currentIndex < 2) {
//       Animated.timing(translationX, {
//         toValue: (currentIndex + 1),
//         duration: 3000,
//         useNativeDriver: true,
//       }).start();
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       Animated.timing(translationX, {
//         toValue: (currentIndex - 1),
//         duration: 3000,
//         useNativeDriver: true,
//       }).start();
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <View style={{ flexDirection: 'row' }}>
//         <TouchableOpacity onPress={handlePrev} >
//           <Text>Prev</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={handleNext} >
//           <Text>Next</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={{ flexDirection: 'row', marginTop: 20 }}>
//         <Animated.View
//           style={{
//             width: 100,
//             height: 100,
//             borderRadius: 50,
//             marginHorizontal:20,
//             borderWidth: 2,
//             borderColor: 'black',
//             //transform: [{ translateX: translationX }],
//             backgroundColor: currentIndex === 0 ? 'red' : null,
//           }}
//         />
//         <View
//           style={{
//             width: 100,
//             height: 100,
//             borderRadius: 50,
//             borderWidth: 2,
//             borderColor: 'black',
//             marginHorizontal:20,
//             backgroundColor: currentIndex === 1 ? 'red' : null,
//           }}
//         />
//         <View
//           style={{
//             width: 100,
//             height: 100,
//             borderRadius: 50,
//             borderWidth: 2,
//             borderColor: 'black',
//             marginHorizontal:20,
//             backgroundColor: currentIndex === 2 ? 'red' : null,
//           }}
//         />
//       </View>
//     </View>
//   );
// };

// export default App;

import React, { Component } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity, Text, Easing } from 'react-native';

class CircleFillAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      fillAnimation1: new Animated.Value(0),
      fillAnimation2: new Animated.Value(0),
    };
  }

  handleNext = () => {
    const { currentStep } = this.state;
    if (currentStep === 0) {
      Animated.timing(this.state.fillAnimation1, {
        toValue: 100,
        duration: 2000,
        useNativeDriver: false,
      }).start(() => {
        this.setState({ currentStep: 1 });
      });
    } else {
      Animated.timing(this.state.fillAnimation2, {
        toValue: 100,
        duration: 2000,
        useNativeDriver: false,
      }).start(() => {
        this.setState({ currentStep: 0 });
      });
    }
  };

  render() {
    const { fillAnimation1, fillAnimation2 } = this.state;

    const fillPercentage1 = fillAnimation1.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%'],
      //extrapolate: 'clamp',
    });

    const fillPercentage2 = fillAnimation2.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%'],
      //extrapolate: 'clamp',
    });

    return (
      <View style={styles.container}>
        <View style={styles.circleContainer}>
          <Animated.View
            style={[styles.circleFill, { width: fillPercentage1, height: fillPercentage1 }]}
          />
        </View>
        <View style={styles.circleContainer}>
          <Animated.View
            style={[styles.circleFill, { width: fillPercentage2, height: fillPercentage2 }]}
          />
        </View>
        <TouchableOpacity onPress={this.handleNext}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'lightgray',
    overflow: 'hidden',
    marginVertical: 10,
  },
  circleFill: {
    position: 'absolute',
    backgroundColor: 'red',
  },
});

export default CircleFillAnimation;