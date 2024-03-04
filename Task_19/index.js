/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HomeScreen from './src/screen/HomeScreen';
import BottomNavigation from './src/screen/BottomNavigation';

AppRegistry.registerComponent(appName, () => BottomNavigation);
