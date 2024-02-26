/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Checkout from './src/screen/Checkout';
import Checkout2 from './src/screen/Checkout2';

AppRegistry.registerComponent(appName, () => Checkout2);
