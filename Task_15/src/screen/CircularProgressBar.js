//This is A Circular Progressbar Code

import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View,Keyboard,Alert } from 'react-native'
import React, { Component } from 'react'
import Svg, { Circle } from 'react-native-svg';
class CircularProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0, // initial progress
      animationInProgress:false,
      animationComplete:false
    };
  }

  componentDidMount(){
    if(!this.state.animationInProgress) {
      this.startAnimation();}
  }

  // The setInterval() function is commonly used to set a delay
  //  for functions that are executed again and again, such as animations.
  //   You can cancel the interval using clearInterval() .
  startAnimation =  ()  => {
    if(!this.state.animationInProgress && !this.state.animationComplete){
    // Simulate progress update
    this.progressInterval = setInterval(() => {
      this.setState(prevState => {
        const newProgress = prevState.progress+1;
        console.log(newProgress);
        if(newProgress >= 100){
        // update progress from 0 to 100
        clearInterval(this.progressInterval);
        return {progress:0,animationInProgress:false,animationComplete:true};
        }
        else{
          return {progress:newProgress};
        }
      });
    }, 10); // update progress every second
    this.setState({animationInProgress:true});
  }
};

stopAnimation = () => {
  clearInterval(this.progressInterval);
  this.setState({animationInProgress:false})
}

toggleAnimation = () => {
  if(this.state.animationComplete){
    this.setState({animationComplete:false},()=>{
      this.startAnimation();
    });
    this.stopAnimation();
  }else{
    if(this.state.animationInProgress){
      clearInterval(this.progressInterval);
      this.setState({animationInProgress:false})
    }else{
      this.startAnimation();
    }
  }
};


  render() {
    const { size, strokeWidth, progressColor, bgColor } = this.props;
    const radius = (size - strokeWidth) / 2;
    console.log(radius);
    const circumference = radius * 2 * Math.PI;
    console.log(circumference)
    const progressOffset = circumference - (this.state.progress / 100) * circumference;
    console.log(progressOffset)
    const imagesource = this.state.animationInProgress?require('../assets/images/innerloading.png'):require('../assets/images/innerloadingblue.png');

    return (
      <TouchableOpacity onPress={this.toggleAnimation}>
      <View>
        <Svg width={size} height={size}>
          {/* Background Circle */}
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={bgColor || '#e4e4e4'}
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Progress Circle */}
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={progressColor || '#00cc00'}
            strokeWidth={strokeWidth}
            //strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={progressOffset}
            fill="none"
            transform={`rotate(-90,${size / 2},${size / 2})`}
          />
        </Svg>
        <Image source={imagesource} style={styles.innerloadingimage}></Image>
        {/* <Text style={{ textAlign: 'center' }}>{`${this.state.progress}%`}</Text> */}
      </View>
      </TouchableOpacity>
    );
  }
}



export default class CircularProgressBar extends Component {
  render() {
    return (
      <View>
                <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 50,marginTop:40 }} >
                    <View style={{ position: 'absolute', top: 0, width: '100%', alignItems: 'center' }}>
                        <CircularProgress size={50} strokeWidth={3} progressColor="rgba(22, 80, 149, 1)" bgColor="#f0f0f0"/>
                    </View>
                </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
      flex:1,
  },
  container2:{
      //flex:1,
      flexDirection:'row',
      marginTop:15,
      marginRight:5
      
  },
  phonenumberview:{
      borderWidth:1,
      borderColor:'rgba(229, 229, 229, 1)',
      backgroundColor:'white',
      borderRadius:10,
      marginHorizontal:20,
      marginTop:48,
      flexDirection:'row'
  },
  deshview:{
      height:1,
      width:12,
      backgroundColor:'rgba(0, 0, 0, 0.3)',
      marginVertical:28
  },
  roundview:{
      borderRadius:100,
      borderColor:'rgba(185, 203, 223, 1)',
      borderWidth:1,
      height:46,
      width:46,
      marginTop:46,
      marginHorizontal:165,
      justifyContent:'center',
      alignItems:'center'
      //backgroundColor:'red'
  },
  resetpasswordbutton:{
      backgroundColor:'rgba(22, 80, 149, 1)',
      borderRadius:100,
      marginHorizontal:40,
      //position:'absolute',
      marginTop:109,
      //bottom:40,
      // paddingVertical:15.5,
      // paddingHorizontal:90,
      height:53,
      justifyContent:'center',
      alignItems:'center'
  },
  resetpasswordbutton2:{
      backgroundColor:'rgba(22, 80, 149, 1)',
      borderRadius:100,
      marginHorizontal:20,
      marginTop:40,
      paddingVertical:15.5,
      justifyContent:'center',
      alignItems:'center'
  },
  phonenumbertextinput:{
      marginLeft:22,
      fontWeight:'400',
      //opacity:50,
      fontSize:16,
      flex:1,
      lineHeight:10
  },
  backbutton: {
      marginTop:21,
      marginLeft:16
  },
  lockimage:{
      alignSelf:'center',
      marginTop:90
  },
  forgotpasswordtext:{
      color:'rgba(28, 28, 28, 1)',
      fontWeight:'700',
      fontSize:24,
      lineHeight:46,
      alignSelf:'center',
      marginTop:35
  },
  forgotpassworddes:{
      color:'rgba(62, 62, 62, 1)',
      fontWeight:'400',
      fontSize:16,
      lineHeight:24.5,
      textAlign:'center',
      marginTop:5,
  },
  resetpasswordtext:{
      color:'rgba(255, 255, 255, 1)',
      fontWeight:'700',
      fontSize:18,
      lineHeight:21.92
  },
  otptext1:{
      borderWidth:1,
      width:44,
      height:55,
      borderColor:'rgba(229, 229, 229, 1)',
      borderRadius:10,
      fontSize:16,
      fontWeight:'700',
      lineHeight:10,
      color:'rgba(28, 28, 28, 1)',
      justifyContent:'center',
      alignItems:'center',
      paddingHorizontal:16
      //marginHorizontal:16
     
  },
  flag: {
      width: 20,
      height: 20,
      marginLeft: 10,
    },
    countryCode: {
      fontSize: 16,
    },
    modalContainer: {
      marginTop: -150,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      backgroundColor:'white',
     // padding: 10,
    // marginRight:100,
      width:80,
      marginLeft:290
    },
    countryItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },
    selectedphonenumber:{
      color:'rgba(62, 62, 62, 1)',
      fontWeight:'600',
      fontSize:16,
      lineHeight:24.5
    },
    innerloadingimage:{
        position:'absolute',
        //marginVertical:15,
        top:15,
        left:15
    },
    serachInput:{
      height:40,
      width:120,
      backgroundColor:'white',
      //borderWidth:0.1,
      borderRadius:10,
      shadowColor:'black',
      //elevation:2,
      marginTop:2,
     // marginLeft:4,
      shadowOpacity:0.5
    }
   
})