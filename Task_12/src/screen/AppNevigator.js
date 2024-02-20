import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { OnBording } from './OnBording';
import Login from './Login';
import SignUp from './SignUp';

const Stack = createStackNavigator();

export default class AppNevigator extends Component {
  render() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='OnBording'>
                <Stack.Screen name="OnBording" component={OnBording}></Stack.Screen>
                <Stack.Screen name='lo' component={Login}></Stack.Screen>
                <Stack.Screen name='Sign' component={SignUp}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
  }
}