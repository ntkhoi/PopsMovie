import {StyleSheet} from 'react-native';

export default AppStyle = {
    
    movie_container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 2,
        justifyContent: 'center',

      
    },
    movie_cell: {
        backgroundColor: 'red',
        margin: 8,
        height: 280,
        alignItems: 'flex-start',
        justifyContent: 'center',
        
    },
    movie_image: {
        height: 220, 
        width: 168
    },

    movie_box_container: {
      flex: 1,
      backgroundColor: 'orange',
      flexDirection: 'column',
    },
    movie_title_style:{
        color: '#ffff',
        fontSize: 14,
        alignItems:'center',
        justifyContent:'center',
        fontWeight: 'bold',
        paddingTop: 5,
        paddingLeft: 10,
        
        width: 150
    },
    movie_gener_style: {
        flex: 0.5 ,
        paddingTop: 3,
        paddingLeft: 10,
        fontSize: 12,
        color: '#4d4d4d'
    },
   detail_banner:{
       height: 200, 
       
   },
   details_container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffff',
    padding: 0
   },

   details_info_view: {
    backgroundColor: '#ffff',
    height: 180,
    flexDirection: 'row',
    borderBottomWidth: 1 ,
    borderColor: '#000033'
    
    
   },
   details_poster: {
    width: 130,
    marginBottom: 10,
    marginLeft: 10,
    marginTop: -10    
   } ,

   details_title: {
    marginTop: 15,
    marginLeft: 10,
    fontWeight: 'bold',
    marginRight: 80
   },

   details_text_info: {
       fontSize: 13 ,
       marginTop: 5,
       marginLeft: 10,
   }  ,

   detials_overview:{
    marginLeft: 10,
    marginTop: 15,
    marginBottom:10,
    marginRight: 10,
    
   },
   detail_play_button: {
    width: 100,
    height: 34,
    borderColor: '#606060',
    borderWidth: 1,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 7,
    margin: 5,
    justifyContent: 'center', 
    alignItems: 'center' 
   },
   detail_play_button_text: {
    fontSize: 13,
   }
};

