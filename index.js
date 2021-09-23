/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Splash from './components/Splash';
import Login from './components/Login';
import SignUp from './components/SignUp';
AppRegistry.registerComponent(appName, () => Login);
