/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import RescheduleBooking from './src/screens/RescheduleBooking';
import demo from './src/screens/demo';

AppRegistry.registerComponent(appName, () => RescheduleBooking);
