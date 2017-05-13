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
       width: 300,
       height: 200,
       
   }
    

    
};

