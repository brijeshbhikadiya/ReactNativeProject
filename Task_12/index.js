/**
 * @format
 */


import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import OnBording from './src/screen/OnBording';
import Login from './src/screen/Login';
import SignUp from './src/screen/SignUp';
import AppNavigator from './src/screen/OnBording';







 AppRegistry.registerComponent(appName, () => AppNavigator);