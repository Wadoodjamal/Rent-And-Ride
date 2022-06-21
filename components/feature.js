import React from 'react';
import { View,TextInput, Text, StyleSheet, Image } from 'react-native';
import { create } from 'react-test-renderer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const Feature = (props) => {

    return (
        <>
        <View style={styles.main}>
        {/* <AntDesign name={props.sign}  size={30} color="white"/> */}
       <FontAwesome name={props.dual ? (props.available ? props.sign : props.altSign) : props.sign} size={30} color={props.dual ? (props.available ? "green" : 'red' ) : 'white'} /> 
         
            <Text style={styles.text}>{props.value}</Text>
        </View>
        </>
    )

}

const styles = StyleSheet.create({
    main: {
        width: 50,
        height: 80,
        backgroundColor: '#202427',
        borderRadius: 10,
        justifyContent: 'space-evenly',
        alignItems:'center',        
    },
    text: {
        fontSize: 10,
    }
    
})

export default Feature;