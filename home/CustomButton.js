import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default ({num, color}) => {
    return(
    <TouchableOpacity style={[styles.container, {backgroundColor:color}]}>
        <Text style={[styles.text]}>{num}</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignContent:'center',
        marginTop: 35,
        borderRadius: 60,
        padding:30
    },
    text:{
        textAlign: 'center',
        fontSize:20,
        fontFamily:'',
        color:'white'
    }
})