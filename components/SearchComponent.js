import React from 'react';
import { View,TextInput, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, navigation} from 'react-native';
import { create } from 'react-test-renderer';


const SearchComponent = (props,{navigation}) => {
    return(
        <>
    <TouchableOpacity style = {styles.background} onPress={()=>{                          
                            props.navigation.navigate('ViewCar',{item: props.booking});}}>
       <View style = {styles.imagesection}>
       <Image source={{uri: props.imageURL}} style = {styles.image} />
        </View> 
   
   <View style = {styles.car}>
    <Text style = {{color: 'black', fontFamily: 'sans-serif-medium'}}>{props.name}</Text>
    <Text style = {{color: 'grey', }}>Rent Per day: Rs.{props.rent}</Text>
   </View>
   </TouchableOpacity>
   
        </>

    );

}

const styles = StyleSheet.create({
    background: {
        width: 300,
        height: 50,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomRightRadius: 15,
        backgroundColor: '#f2b655',
    },
    car: {
        justifyContent:'center', 
        alignItems: 'center', 
        
        // backgroundColor: 'green',
        width: '70%',
        borderBottomRightRadius: 15,
        borderTopRightRadius:15,
    },
    imagesection: {
        
        width: '30%',
    },
    image: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    }
})
export default SearchComponent;