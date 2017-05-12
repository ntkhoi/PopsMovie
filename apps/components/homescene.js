

import React , {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image
} from 'react-native';

import AppStyles from '../appstyle/decoration.js'
import Global_variable from '../global/global_variable.js'

export default class HomeScene extends Component{

  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }

  static navigationOptions = {
    title: 'Welcome',
  };

   componentDidMount() {
        this.fetchMovieDatas(Global_variable.moviesUrl);
        
    }

  fetchMovieDatas(uri){
    return fetch(uri).then((response) => response.json()).then((responseJson) => {
            console.log(responseJson);
            this.setState({
                dataSource: this
                    .state
                    .dataSource
                    .cloneWithRows(responseJson.results), 
            });

        }).catch((error) => {
            alert("Please check your network connection and try again later.");
            console.error(error);
        });
  }

  _renderRow(rowData){
    return (
        <View style={AppStyles.movie_cell} >
          <View style={AppStyles.movie_box_container} >
            <Image style={AppStyles.movie_image} source={{
                uri: Global_variable.Image + rowData.poster_path }} />
                
          </View>
        </View>
    )
  }
  
  render(){
    
        return(
            <ListView contentContainerStyle={AppStyles.movie_container}       
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
              />
        );
    }

    
}

