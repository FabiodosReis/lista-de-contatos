import React from 'react';
import { Text, StyleSheet, FlatList} from 'react-native';

import PeopleListItems from './PeopleListItems';

const PeopleList = (props) => {

    const {peoples, onPressItem} = props;
    
    return(

        <FlatList
            style={styles.container}
            data={peoples}
            renderItem={({ item }) => (
                <PeopleListItems
                    people={item}
                    navigateToPeopleDetail={onPressItem} />
            )}
            keyExtractor={(item,index) => index.toString()}/>        
    );    
    
};


const styles = StyleSheet.create({

    container : {
        backgroundColor: '#e2F9FF'
    }   
});

export default PeopleList;