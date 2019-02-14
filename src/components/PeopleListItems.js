import React  from "react";
import { View, Text, StyleSheet } from "react-native";

import CapitalizeFirstLetter from '../util';

const PeopleListItems = (props) => {

    const {people} = props;
    const {title, first, last} = people.name;

    const capitalizeFirstLetter = (string) => {
        return string[0].toUpperCase() + string.slice(1);
    };
    
    return (
        <View style={styles.line}>
            <Text style={styles.lineText}>
                { ` ${capitalizeFirstLetter(title)} ${capitalizeFirstLetter(first)} ${capitalizeFirstLetter(last)} `}
            </Text>
        </View>
    );   
};

const styles =  StyleSheet.create({

    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#BBB',
        flexDirection: 'row',
        alignItems: 'center'
    },

    lineText: {
        fontSize: 20,
        paddingLeft: 15        
    }

});

export default PeopleListItems;