import {Text, View, StyleSheet, Image} from 'react-native';
import React, {Component} from 'react';
import HomeScreen from './HomeScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Players from './Players';
import Location from './Location';
import Turnaments from './Turnaments';
import {createStackNavigator} from '@react-navigation/stack';
import CreateNewTurnaments from './CreateNewTurnaments';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const TabNavigationFun = () => (
  <Tab.Navigator
    initialRouteName="Turnaments"
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'Players') {
          iconName = focused
            ? require('../assets/images/PlayerYellow.png')
            : require('../assets/images/Player.png');
        } else if (route.name === 'HomeScreen') {
          iconName = focused
            ? require('../assets/images/TeamPlayerYellow.png')
            : require('../assets/images/TeamPlayer.png');
        } else if (route.name === 'Location') {
          iconName = focused
            ? require('../assets/images/LocationYellow.png')
            : require('../assets/images/Location.png');
        } else {
          iconName = focused
            ? require('../assets/images/TrophyYellow.png')
            : require('../assets/images/Trophy.png');
        }

        return <Image source={iconName} style={{marginTop: 15}} />;
      },
      tabBarLabel: '',
      headerTitle: '',
    })}>
    <Tab.Screen name="Turnaments" component={Turnaments} />
    <Tab.Screen name="HomeScreen" component={HomeScreen} />
    <Tab.Screen name="Players" component={Players} />
    <Tab.Screen name="Location" component={Location} />
  </Tab.Navigator>
);

export default class New extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {/* <View style={styles.TitleBarView}>
          <Image
            source={require('../assets/images/More.png')}
            style={styles.MoreImage}></Image>
          <Image source={require('../assets/images/TournamentPic.png')}></Image>
          <Image
            source={require('../assets/images/Search.png')}
            style={styles.SearchImage}></Image>
        </View>

        <View style={styles.LineView}></View> */}

        <NavigationContainer>
          <Stack.Navigator initialRouteName="Turnaments">
            <Stack.Screen
              name="TabNavigationFun"
              component={TabNavigationFun}
              options={{
                headerTitle: () => (
                  <View style={styles.TitleBarView}>
                    <Image
                      source={require('../assets/images/More.png')}
                      style={styles.MoreImage}></Image>
                    <Image
                      source={require('../assets/images/TournamentPic.png')}></Image>
                    <Image
                      source={require('../assets/images/Search.png')}
                      style={styles.SearchImage}></Image>
                  </View>
                ),

                // <View style={styles.LineView}></View>
              }}
            />
            <Stack.Screen
              name="CreateNewTurnaments"
              component={CreateNewTurnaments}
              options={{headerShown: false}}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  InnerContainer: {
    backgroundColor: 'rgba(246, 249, 252, 1)',
    paddingBottom: 67,
  },
  TitleBarView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    width: 390,
  },
  FlatlistView: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginHorizontal: 20,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 2,
    paddingVertical: 8.5,
    paddingLeft: 13.05,
    paddingRight: 15.5,
  },
  LineView: {
    marginTop: 17,
    borderColor: 'rgba(180, 180, 183, 0.3)',
    borderWidth: 1,
  },
  MoreImage: {
    position: 'absolute',
    left: 20,
  },
  SearchImage: {
    position: 'absolute',
    right: 20,
  },
  DeleteImage: {
    position: 'absolute',
    right: 15.5,
    top: 16.91,
  },
  TeamsCountText: {
    marginTop: 10,
    marginBottom: 8,
    marginLeft: 20,
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19.49,
  },
  TeamNameText: {
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17.05,
  },
  TeamCountText: {
    color: 'rgba(255, 171, 64, 1)',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 13.4,
  },
});
