/**
 * @format
 * 
 */

import {AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';
//import App from './App';
import {name as appName} from './app.json';
import Splash from './components/Splash';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home'
import SearchBar from './components/SearchBar'
import SlideShowAA from './components/SlideShowAA'
//AppRegistry.registerComponent(appName, () => Login);
//screen names

AppRegistry.registerComponent(appName, () => SlideShowAA);
