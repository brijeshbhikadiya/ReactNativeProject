import { Text, View,TouchableOpacity,Image } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import {OnBording} from './OnBording';
import SignUp from './SignUp';

const Stack = createStackNavigator();
export default class NavigateApp extends Component {
  render() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='OnBording'>
              <Stack.Screen name='Onboarding' component={OnBording} options={{headerShown:false}}/>
              <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
              <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
  }
}