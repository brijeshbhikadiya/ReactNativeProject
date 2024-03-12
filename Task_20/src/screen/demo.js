import {
    Text,
    View,
    StatusBar,
    StyleSheet,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import React, {Component} from 'react';
  
  import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
  import {NavigationContainer} from '@react-navigation/native';
  import {createStackNavigator} from '@react-navigation/stack';
  import LinearGradient from 'react-native-linear-gradient';
  import CreateNewTournament from './CreateNewTournament';
  import Teams from './Teams';
  import HomeScreen from './HomeScreen';
  import Players from './Players';
  import Venues from './Venues';
  
  const Tab = createMaterialTopTabNavigator();
  const Stack = createStackNavigator();
  
  const TabNaviagtionFun = () => (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      // tabBarOptions={{
      //   indicatorStyle: {
      //     backgroundColor: 'transparent', // Set the backgroundColor to hide the indicator
      //   },
      // }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
  
          if (route.name === 'HomeScreen') {
            iconName = focused
              ? require('../assets/images/tabSelectedImg1.png')
              : require('../assets/images/tabImg1.png');
          } else if (route.name === 'Teams') {
            iconName = focused
              ? require('../assets/images/tabSelectedImg2.png')
              : require('../assets/images/tabImg2.png');
          } else if (route.name === 'Players') {
            iconName = focused
              ? require('../assets/images/tabSelectedImg3.png')
              : require('../assets/images/tabImg3.png');
          } else if (route.name === 'Venues') {
            iconName = focused
              ? require('../assets/images/tabSelectedImg4.png')
              : require('../assets/images/tabImg4.png');
          }
  
          return (
            <Image
              source={iconName}
              style={{width: 24, height: 24, marginTop: 10}}
            />
          );
        },
        tabBarLabel: '',
        headerTitle: '',
      })}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        
      />
      <Tab.Screen name="Teams" component={Teams} />
      <Tab.Screen name="Players" component={Players} />
      <Tab.Screen name="Venues" component={Venues} />
    </Tab.Navigator>
  );
  export default class TabNavigation extends Component {
    render() {
      return (
        <View style={styles.mainContainer}>
          <StatusBar
            barStyle={'dark-content'}
            translucent={true}
            backgroundColor={'transparent'}></StatusBar>
          {/* <View style={styles.topView}>
            <Image
              source={require('../assets/images/Menu.png')}
              style={styles.menuImg}
            />
            <Image
              source={require('../assets/images/logo.png')}
              style={styles.logoImg}
            />
            <Image
              source={require('../assets/images/search.png')}
              style={styles.searchImg}
            />
          </View> */}
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="HomeScreen"
              // screenOptions={{headerShown: false}}
              >
              <Stack.Screen
                name="TabNaviagtionFun"
                component={TabNaviagtionFun}
                options={{
                  headerTitle: () => 
                    <View style={styles.topView}>
                      <Image
                        source={require('../assets/images/Menu.png')}
                        style={styles.menuImg}
                      />
                      <Image
                        source={require('../assets/images/logo.png')}
                        style={styles.logoImg}
                      />
                      <Image
                        source={require('../assets/images/search.png')}
                        style={styles.searchImg}
                      />
                    </View>
                }}
              />
              <Stack.Screen
                name="CreateNewTournament"
                component={CreateNewTournament}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
            {/ <TabNaviagtionFun/> /}
          </NavigationContainer>
  
          {/ <View style={styles.roundView}> /}
          {/* <LinearGradient
            colors={[
              'rgba(255, 255, 255, 0.5)',
              'rgba(255, 255, 255, 0.5)',
              'rgba(255, 255, 255, 0.5)',
            ]}
            style={{
              position: 'absolute',
              bottom: 0,
              height: 75,
              left: 0,
              right: 0,
            }}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}>
            <View style={styles.roundView}>
              <TouchableOpacity>
                  <Image
                  source={require('../assets/images/plus.png')}
                  style={styles.plusImg}
                  />
              </TouchableOpacity>
            </View> */}
          {/ </View> /}
          {/ </LinearGradient> /}
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: 'white',
    },
    topView: {
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: 'white',
      // paddingHorizontal: 20,
      marginTop: 40,
      paddingBottom: 18,
      width:390,
      borderBottomWidth: 0.5,
      borderBottomColor: '#E5E5E5',
    },
    menuImg: {
      position: 'absolute',
      top: 5,
      left: 0,
    },
    logoImg: {},
    searchImg: {
      position: 'absolute',
      top: 5,
      right: 20,
    },
    roundView: {
      justifyContent: 'center',
      marginTop: -30,
      //   position:'absolute',
      //   top:30,
      alignSelf: 'center',
      height: 75,
      width: 75,
      borderRadius: 100,
      borderColor: 'rgba(38, 239, 233, 0.3)',
      borderWidth: 12,
      backgroundColor: 'rgba(38, 239, 233, 1)',
    },
    plusImg: {
      //   justifyContent: 'center',
      alignSelf: 'center',
    },
  });
  