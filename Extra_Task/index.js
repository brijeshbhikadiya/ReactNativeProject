/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SignInScreen from './src/screen/SignInScreen';
import ForgotPassword from './src/screen/ForgotPassword';

AppRegistry.registerComponent(appName, () => ForgotPassword);
