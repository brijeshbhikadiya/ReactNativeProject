/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FunctionComponentSyntax from './src/screen/FunctionComponentSyntax';
import FunctionalComponentUseState from './src/screen/FunctionalComponentUseState';
import FunctionComponentUseEffect from './src/screen/FunctionComponentUseEffect';
import FunctionComponentUseEffectWithUnmount from './src/screen/FunctionComponentUseEffectWithUnmount';
import FunctionalComponentUseEfectWIthDidUpdate from './src/screen/FunctionalComponentUseEfectWIthDidUpdate';


AppRegistry.registerComponent(appName, () => FunctionalComponentUseEfectWIthDidUpdate);
