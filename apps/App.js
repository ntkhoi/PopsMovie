/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import { AppRegistry, } from 'react-native';
import {  StackNavigator, } from 'react-navigation';

import HomeScene from '../apps/components/homescene.js'

const movie_app = StackNavigator({
  Home: { screen: HomeScene },
});

AppRegistry.registerComponent('movie_app', () => movie_app);
