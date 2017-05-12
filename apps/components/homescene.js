

import React , {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

import AppStyles from '../appstyle/decoration.js'

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
        this.fetchMovieDatas('https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed');
        
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
         <Text style={AppStyles.movie_cell}> ABC XYSDASD </Text>
    )
  }
  
  render(){
    
        return(
            <ListView style={AppStyles.movie_container}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
              />
        );
    }

    
}

