import React from 'react';
import { View,TextInput, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { create } from 'react-test-renderer';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Category = (props) => {

    return (
            <TouchableOpacity style = {styles.category}><Text style = {styles.Cattext}>{props.name}</Text></TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    category: {
        width: 60,
        height: 30,
        borderRadius: 12,
        fontSize: 10,
        marginTop:10,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#202427',
        borderColor: '#202427',
        borderBottomColor: 'black',
        border: 10,
    },
    Cattext: {
        fontSize: 15,
        color: 'white',
        fontFamily: 'sans-serif-light'
    }
    
})

export default Category;