/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import ProductPurchaseRecepit from './src/screen/ProductPurchaseRecepit';
import ProductRefundRecepit from './src/screen/ProductRefundRecepit';

AppRegistry.registerComponent(appName, () => ProductPurchaseRecepit);
