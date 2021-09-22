/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Splash from '../plantapp/components/Splash';
import Login from './components/Login';
AppRegistry.registerComponent(appName, () => Splash);
