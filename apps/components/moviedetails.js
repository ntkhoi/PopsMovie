

import React , {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';

import AppStyles from '../appstyle/decoration.js'

export default class MovieDetails extends Component{
    static navigationOptions = {
    title: 'Dustin Movie',
  };
  render() {
    return (
      <View>
        <Text>Chat with Dustin</Text>
      </View>
    );
  }
}