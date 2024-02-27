import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';

class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStep: 0,
      progress1: new Animated.Value(0),
      progress2: new Animated.Value(0),
      progress3: new Animated.Value(0)
    };
  }

  start1 = () => {
    Animated.timing(this.state.progress1, {
      toValue: 100,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };

  start2 = () => {
    Animated.timing(this.state.progress2, {
      toValue: 100,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };

  start3 = () => {
    Animated.timing(this.state.progress3, {
      toValue: 100,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };

  render() {
    const { selectedStep, progress1, progress2, progress3 } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ width: '100%', alignItems: 'center', padding: 50 ,flexDirection:'row'}}>
          <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: selectedStep > 0 ? 'green' : '#f2f2f2', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#fff' }}>1</Text>
          </View>
          
          
          
          <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: selectedStep > 1 ? 'green' : '#f2f2f2', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#fff' }}>2</Text>
          </View>
          <View style={{ height: 6, width: 100, backgroundColor: '#f2f2f2' }}></View>
          <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: selectedStep > 2 ? 'green' : '#f2f2f2', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#fff' }}>3</Text>
          </View>
          <View style={{ height: 6, width: 100, backgroundColor: '#f2f2f2' }}></View>
          <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: selectedStep > 3 ? 'green' : '#f2f2f2', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#fff' }}>4</Text>
          </View>
        </View>
        <View style={{ height: '100%', marginTop:10,marginLeft:30,padding: 50, position: 'absolute', top: 0 ,flexDirection:'row'}}>
          <Animated.View style={{ height: 6,width: progress1, backgroundColor: 'green' }}></Animated.View>
          <Animated.View style={{ height: 6, width: progress2, backgroundColor: 'green' }}></Animated.View>
          <Animated.View style={{ height: 6, width: progress3, backgroundColor: 'green' }}></Animated.View>
        </View>
        <TouchableOpacity
          style={{ marginTop: 100, height: 50, width: 200, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center', borderRadius: 10, alignSelf: 'center' }}
          onPress={() => {
            if (selectedStep == 1) {
              this.start1();
            }
            if (selectedStep == 2) {
              this.start2();
            }
            if (selectedStep == 3) {
              this.start3();
            }
            if (selectedStep == 0) {
              this.setState({ selectedStep: selectedStep + 1 });
            } else {
              setTimeout(() => {
                this.setState({ selectedStep: selectedStep + 1 });
              }, 3000);
            }
          }}>
          <Text>Next Step</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Progress;