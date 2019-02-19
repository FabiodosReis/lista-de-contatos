import React from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';

import Header from '../components/Header';
import PeopleList from '../components/PeopleList';


import axios from 'axios';

export default class PeoplePage extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      peoples: [],
      loading: false,
      error: false
    }

  }

  renderLoading(){

    return <ActivityIndicator size='large' color='#6ca2f7' />   
  }

  componentDidMount(){

    this.setState( { loading: true });      

      setTimeout(() => {
        axios
        .get('https://randomuser.me/api/?nat=br&results=150')
        .then(response => {
          const {results} = response.data;
          this.setState({
            peoples: results,
            loading: false
          });    
        }).catch((error) => {

            this.setState({

               error: true,
               loading: false

              });
        })

      },1500);   
  }

  render() { 

    return (      
      <View style={styles.container}>     
          { this.state.loading ?
             this.renderLoading()
              : this.state.error
                ? <Text style={styles.error}>Ops...... =(</Text> 
                : <PeopleList
                  peoples={this.state.peoples}
                  onPressItem={(pageParams) => {this.props.navigation.navigate('PeopleDetail', pageParams)}}           
          /> }        
      </View>          
    );
  }
}

const styles = StyleSheet.create({

  container: {
		flex: 1,
    justifyContent: 'center'    
  },
  
  error : {

    color: 'red',
    alignSelf: 'center'  }


});


