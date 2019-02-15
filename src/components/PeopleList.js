import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

import PeopleListItems from './PeopleListItems';

const PeopleList = (props) => {

    const {peoples, onPressItem} = props;
        
    const items = peoples.map(people => {            
        return <PeopleListItems navigateToPeopleDetail={onPressItem}  key={people.name.first} people={people} />       
    });   
    
    return(
        <View style={styles.container}>
            { items }
        </View>
    )
};


const styles = StyleSheet.create({

    container : {
        backgroundColor: '#e2F9FF'
    }   
});

export default PeopleList;