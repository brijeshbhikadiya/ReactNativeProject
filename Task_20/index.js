/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import New from './src/screen/New';
import CreateNewTurnaments from './src/screen/CreateNewTurnaments';

AppRegistry.registerComponent(appName, () => New);
