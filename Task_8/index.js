/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MyOrder from './src/screen/MyOrder';

AppRegistry.registerComponent(appName, () => MyOrder);
