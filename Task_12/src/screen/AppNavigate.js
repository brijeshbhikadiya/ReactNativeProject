import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import { OnBording } from './OnBording';
import SignUp from './SignUp';

const Stack = createStackNavigator();
export default class AppNavigate extends Component {
  render() {
    return (
                <NavigationContainer>
                <Stack.Navigator initialRouteName='OnBording'>
                <Stack.Screen name='Onboarding' component={OnBording}/>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='Signup' component={SignUp}/>
                </Stack.Navigator>
                </NavigationContainer>
    )
  }
}