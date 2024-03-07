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
import FunctionalComponentUseContext from './src/screen/FunctionalComponentUseContext';
import FunctionalComponentTask from './src/screen/FunctionalComponentTask';
import Child2SUseContextComponent from './src/screen/Child2SUseContextComponent';
import UseReducerMain from './src/screen/UseReducerMain';
import UseMemo from './src/screen/UseMemo';
import UseCallBack from './src/screen/UseCallBack';


AppRegistry.registerComponent(appName, () => UseCallBack);
