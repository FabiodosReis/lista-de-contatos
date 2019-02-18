import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Tableline from '../components/TableLine';

export default class PeopleDetailsPage extends React.Component {


 render(){

    const { people } = this.props.navigation.state.params;

    return (
        <View style={styles.container}>
            <Image
                style={styles.avatar}
                source={{ uri: people.picture.large }}/>

                <View style={ styles.detailContainer }>
                    <Tableline label="Email:" content={people.email} />
                    <Tableline label="Cidade:" content={people.location.city} />  
                    <Tableline label="Estado:" content={people.location.state} /> 
                    <Tableline label="Tel:" content={people.phone} /> 
                    <Tableline label="Cel:" content={people.cell} />    
                    <Tableline label="Nacionalidade:" content={people.nat} />                  
                </View>                               
        </View>
        
    );
 }

}

const styles = StyleSheet.create({    

        avatar: {
            aspectRatio: 1
        },

        container: {
            padding: 15           
        },

        detailContainer: {
            backgroundColor: '#e2f9ff',
            marginTop: 20,
            elevation: 1

        }        
    });