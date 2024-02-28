import { Text, View,StyleSheet, TouchableOpacity,Animated } from 'react-native'
import React, { Component } from 'react'

export default class Checkout3 extends Component {
    constructor(){
        super()
        this.state={
            progress1: new Animated.Value(0),
            progress2: new Animated.Value(0),
        }
    }
    
    start1=()=>{ 
        Animated.timing(this.state.progress1, {
            toValue: 36,
            duration: 1000,
            useNativeDriver: false,
          }).start();
    }
   
    start2 = () => {
        Animated.timing(this.state.progress2, {
          toValue: 28,
          duration: 1000,
          useNativeDriver: false,
        }).start();
      };

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row',marginHorizontal:100,justifyContent:'space-between',marginTop:300}}>
            <View style={styles.firstround}></View>
            <View style={styles.firstround}></View>
            <View style={styles.firstround}></View>
        </View>
        
        <Animated.View style={{height:36,width:this.state.progress1,backgroundColor:'red',borderRadius:100,marginHorizontal:100}}></Animated.View>
        <Animated.View style={{height:36,width:this.state.progress2,backgroundColor:'red',borderRadius:100,marginHorizontal:100}}></Animated.View>
        <View style={{flexDirection:'row',marginHorizontal:100,justifyContent:'space-around',marginTop:20}}>
            <TouchableOpacity style={{borderWidth:1,paddingHorizontal:10,paddingVertical:5}}>
                <Text>Prev</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderWidth:1,paddingHorizontal:10,paddingVertical:5}} onPress={this.start1}>
                <Text>Next</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    firstround:{
        borderWidth:1,
        height:36,
        width:36,
        borderRadius:100
    }
})