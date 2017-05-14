

import React , {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity,
  Alert,
  RefreshControl
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import AppStyles from '../appstyle/decoration.js'
import Global_variable from '../global/global_variable.js'

export default class HomeScene extends Component{

  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
      refreshing: false,
    };
    this._renderRow = this._renderRow.bind(this);
  }

  _onRefresh() {
    this.setState({refreshing: true});
    this.fetchMovieDatas(Global_variable.moviesUrl).then(() => {
      this.setState({refreshing: false});
    });
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

  _onMoviePress(rowData){
     const { navigate } = this.props.navigation;
     console.log("_onMoviePress" + rowData.title);
     navigate('MovieDetail', { data: rowData });
  }
  _renderRow(rowData){
    return (
       <TouchableOpacity onPress={() =>  this._onMoviePress(rowData)}>
        <View style={AppStyles.movie_cell} >
          <View style={AppStyles.movie_box_container} >
            <Image style={AppStyles.movie_image} source={{
                uri: Global_variable.Image + rowData.poster_path }} />
            <Text numberOfLines={2} style={AppStyles.movie_title_style}  >{rowData.title}</Text>
            <Text style={AppStyles.movie_gener_style} >{'Ratting :' + rowData.vote_average}</Text>
          </View>
        </View>
        </TouchableOpacity>
    )
  }
  
  render(){
        
        return(
            <ListView contentContainerStyle={AppStyles.movie_container}       
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                refreshControl={
                    <RefreshControl
                      refreshing={this.state.refreshing}
                      onRefresh={this._onRefresh.bind(this)}
                    />
                  }
              />
        );
    }

    
}

