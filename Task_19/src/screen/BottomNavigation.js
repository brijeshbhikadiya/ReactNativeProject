import { Text, View,Image } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import MyBooking from './MyBooking';
import Messages from './Messages';
import MyProfile from './MyProfile';

const Tab = createBottomTabNavigator();


export default class BottomNavigation extends Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:'white'}}>
        <NavigationContainer>
            <Tab.Navigator initialRouteName='HomeScreen'  screenOptions={({route}) => ({
                tabBarLabel:({focused}) => (
                  <View style={{marginBottom:5}}>
                      <Text style={{color : focused ? 'rgba(241, 147, 87, 1)' : 'rgba(121, 141, 165, 1)',fontSize:15,marginTop:14,lineHeight:17.05}}>{route.name}</Text>
                  </View >
                  
              ),
              tabBarIcon: ({focused, color, size}) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = focused
                    ? require('../assets/images/HomeYellow.png') 
                    : require('../assets/images/Home.png');
                } else if (route.name === 'Bookings') {
                  iconName = focused
                    ? require('../assets/images/BookingYellow.png')
                    : require('../assets/images/Booking.png');
                } else if (route.name === 'Messages') {
                  iconName = focused
                    ? require('../assets/images/MessagesYellow.png')
                    : require('../assets/images/Messages.png');
                } else {
                  iconName = focused
                    ? require('../assets/images/ProfileYellow.png')
                    : require('../assets/images/Profile.png');
                }

                return <Image source={iconName} style={{marginTop: 20}} />;
              },
              headerTitle:'',
              headerStatusBarHeight:-70,
              
            })}>
                <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
                <Tab.Screen name='Bookings' component={MyBooking}></Tab.Screen>
                <Tab.Screen name="Messages" component={Messages}></Tab.Screen>
                <Tab.Screen name="Profile" component={MyProfile}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
      </View>
    )
  }
}