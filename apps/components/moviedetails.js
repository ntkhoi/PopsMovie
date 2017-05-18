

import React , {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity,
  Alert,
  Button
} from 'react-native';
import { NavigationActions } from 'react-navigation'
import AppStyles from '../appstyle/decoration.js'
import Global_variable from '../global/global_variable.js'

export default class MovieDetails extends Component{
   
   _this = this;

    
   static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.data.title}`,
    headerMode: 'none',
    headerTitle: null,
    headerBackTitle: 'Back',
    headerTruncatedBackTitle: 'Back'
  });
  

  _goback(){
      const {goBack} = this.props.navigation;
  }

  _onPressPlayVideo(){
    console.log("Click Play video");
  }

  render() {
    const {state} = this.props.navigation;
    console.log("MovieDetails: " + state.params.data.title);
    return (
      <View style={AppStyles.details_container}  >
        <Image style={AppStyles.detail_banner}
         source={{
                uri: Global_variable.Image + state.params.data.backdrop_path }}
         />
         <View style={AppStyles.details_info_view}>
            <Image style={AppStyles.details_poster} 
            source={{uri: Global_variable.Image + state.params.data.poster_path}}
            /> 
            <View style={{ flex: 1 , flexDirection: 'column' }}>
                <Text style={AppStyles.details_title} >
                    {state.params.data.title}
                </Text>
                <Text style={AppStyles.details_text_info}>
                    {state.params.data.release_date}
                </Text>
                <Text style={AppStyles.details_text_info}>
                    Average ratting: 
                </Text>
                <Text style={AppStyles.details_text_info}>
                     {state.params.data.vote_average}
                </Text>
                 <TouchableOpacity onPress={this._onPressPlayVideo}>
                    <View style={AppStyles.detail_play_button} >
                        <Text style={AppStyles.detail_play_button_text} >
                            Play Video
                        </Text>
                    </View>
                    </TouchableOpacity>

            </View>
           
         </View>
          <Text style={AppStyles.detials_overview} >
                {state.params.data.overview}
         </Text>
         
      </View>
    );
  }
}