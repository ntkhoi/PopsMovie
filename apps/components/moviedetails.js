

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
import Global_variable from '../global/global_variable.js'

export default class MovieDetails extends Component{
    static navigationOptions = {
    title: 'Dustin Movie',
  };
  render() {
    const {state} = this.props.navigation;
    console.log("MovieDetails: " + state.params.data.title);
    return (
      <View>
        
      </View>
    );
  }
}