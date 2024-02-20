/**
 * @format
 */


import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './src/screen/Login';
import SignUp from './src/screen/SignUp';
import { OnBording } from './src/screen/OnBording';
import AppNavigate from './src/screen/AppNavigate';


 AppRegistry.registerComponent(appName, () => AppNavigate);
