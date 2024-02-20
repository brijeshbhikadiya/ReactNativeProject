/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import NavigateApp from './src/screen/NavigateApp';

AppRegistry.registerComponent(appName, () => NavigateApp);
