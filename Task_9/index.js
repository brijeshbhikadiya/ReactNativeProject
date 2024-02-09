/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MakeupArtistProfile from './src/screen/MakeupArtistProfile';
import ViewingMakeupArtistListProduct from './src/screen/ViewingMakeupArtistListProduct';

AppRegistry.registerComponent(appName, () => ViewingMakeupArtistListProduct);
