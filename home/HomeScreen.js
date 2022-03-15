import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from './CustomButton'

export default()=>(
    <>
    <View style={styles.container}>
        <View style={styles.rowButton}>

            <CustomButton num='1' color='#bebebe' />

            <CustomButton num='2' color='#bebebe' />

            <CustomButton num='3' color='#bebebe' />

        </View>

        <View style={styles.rowButton}>

            <CustomButton num='4' color='#bebebe' />

            <CustomButton num='5' color='#bebebe' />

            <CustomButton num='6' color='#bebebe' />

        </View>

        <View style={styles.rowButton}>

            <CustomButton num='7' color='#bebebe' />

            <CustomButton num='8' color='#bebebe' />

            <CustomButton num='9' color='#bebebe' />

        </View>



    </View>
    
        <View style={{flexDirection:'row'}}>
            <CustomButton num = '0'  color='#bebebe'/>
        </View> 
   
    </>
)


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },
    rowButton:{
        flexDirection:'column',
        margin:10
    }
        
})