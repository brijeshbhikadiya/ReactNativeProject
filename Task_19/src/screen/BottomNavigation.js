import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import MyBooking from './MyBooking';
import Messages from './Messages';
import MyProfile from './MyProfile';

const Tab = createBottomTabNavigator();

export default class BottomNavigation extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="HomeScreen"
            screenOptions={({route}) => ({
              tabBarLabel: ({focused}) => (
                <View style={{marginBottom: 5}}>
                  <Text
                    style={{
                      color: focused
                        ? 'rgba(241, 147, 87, 1)'
                        : 'rgba(121, 141, 165, 1)',
                      fontSize: 15,
                      marginTop: 20,
                      lineHeight: 17.05,
                    }}>
                    {route.name}
                  </Text>
                </View>
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
              headerTitle: '',
              //headerStatusBarHeight:-70,
            })}>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerLeft: () => (
                  <TouchableOpacity style={styles.MoreImage}>
                    <Image
                      source={require('../assets/images/More.png')}></Image>
                  </TouchableOpacity>
                ),
                headerTitleAlign: 'center',
                headerTitle: () => (
                  <View style={styles.HeaderView}>
                    <View>
                      <Text style={styles.UserName}>Hy James!</Text>
                      <View style={styles.HeaderInnerView}>
                        <Image
                          source={require('../assets/images/Location.png')}
                          style={{marginTop: 6}}></Image>
                        <Text style={styles.UserLocationName}>
                          Bukit Batok, Singapore
                        </Text>
                      </View>
                    </View>
                  </View>
                ),
              }}></Tab.Screen>
            <Tab.Screen
              name="Bookings"
              component={MyBooking}
              options={{
                headerStatusBarHeight: -70,
              }}></Tab.Screen>
            <Tab.Screen
              name="Messages"
              component={Messages}
              options={{
                headerLeft: () => (
                  <TouchableOpacity style={styles.MoreImage}>
                    <Image
                      source={require('../assets/images/More.png')}></Image>
                  </TouchableOpacity>
                ),
                headerTitleAlign: 'center',
                headerTitle: () => (
                  <View style={styles.HeaderView}>
                    <Text style={styles.TitleName}>Messages</Text>
                  </View>
                ),
              }}></Tab.Screen>
            <Tab.Screen
              name="Profile"
              component={MyProfile}
              options={{
                headerLeft: () => (
                  <TouchableOpacity style={styles.MoreImage}>
                    <Image
                      source={require('../assets/images/More.png')}></Image>
                  </TouchableOpacity>
                ),
                headerTitleAlign: 'center',
                headerStyle: {backgroundColor: 'rgba(245, 249, 251, 1)'},
              }}></Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  HeaderView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 22,
  },
  MoreImage: {
    position: 'absolute',
    left: 20,
  },
  UserName: {
    alignSelf: 'center',
    color: 'rgba(23, 46, 81, 1)',
    fontWeight: '800',
    fontSize: 19,
    lineHeight: 18,
  },
  UserLocationName: {
    color: 'rgba(241, 147, 87, 1)',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 16,
    marginLeft: 5,
    marginTop: 5,
  },
  HeaderInnerView: {
    flexDirection: 'row',
  },
  TitleName: {
    color: 'rgba(28, 28, 28, 1)',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 16,
    marginTop: -15,
  },
});
