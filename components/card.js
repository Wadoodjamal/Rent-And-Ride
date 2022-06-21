/*eslint-disable */

import React from 'react';
import { View,TextInput, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, navigation } from 'react-native';
import { create } from 'react-test-renderer';
import ViewCar from '../screens/Viewcar';
import Feature from './feature';
import { getuser } from './async';
import { removeuser } from './async';
import firestore from '@react-native-firebase/firestore';

import {fetchCarsData} from '../components/firebase.js'

const Card = (props,{navigation}) => {
    // const [item, setitem] = React.useState();
    // setitem(props.booking);
    return (
        <>
        <View style={styles.main}>
        <Image source={{uri: props.imageURL}} style = {styles.image}/>
      <View>
        <Text style = {styles.name}>{props.name}</Text>
        </View> 
      <View style={styles.details}>
            <Feature value= {props.value} sign = "star-half-full"/>
            <Feature value= {props.value} sign = "tachometer"/> 
            <Feature value= {props.price} sign = "dollar"/>
            <Feature value= "Available" sign = "check-circle-o" altSign="times-circle-o" available={props.available} dual={true}/>
      </View>
      <View style={styles.buttonframe}>
                        <TouchableOpacity style={styles.BookNowButton} disabled = {props.available? false : true} 
                        onPress={()=>{                          
                            props.navigation.navigate('ViewCar',{item: props.booking});
                            console.log("Pressed"+props.booking.company);

                            // const user = getuser();//from async storage
                            // console.log("Current User: "+ {user});
                            // removeuser('123');
                            // firestore()
                            //     .collection('cars')
                            //     // Filter results
                            //     .where('category', '==', 'SUV')
                            //     .get()
                            //     .then(querySnapshot => {
                            //         //console.log(querySnapshot.data());
                            //         querySnapshot.forEach(documentSnapshot => {
                            //             console.log('User ID: ', documentSnapshot.data().company);
                            //           });
                            //     });
                                
                        }
                         }
                        >
                            <Text style={styles.buttontext}>Book Now!</Text>
                        </TouchableOpacity>
                    </View>
        </View>
        </>
    )

}

const styles = StyleSheet.create({
    main: {
        width: '80%',
        height: 400,
        backgroundColor: '#ededeb',
        borderRadius: 15,
        
        alignItems: 'center',
        margin:40,
        alignSelf: 'center'
        
    },
    image: {
        width: '100%',
        height: '50%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
               
    },
    
    details: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'stretch',  
        width: '100%',
        marginTop: 10,
    },
    name: {
        fontSize: 25,
        color: 'black',
        fontFamily: 'sans-serif',
        marginTop: 10,
    },
    buttonframe: {
        justifyContent:'center', 
        alignItems: 'center', 
        marginTop: 10,
    },
    BookNowButton: {
        width: 180,
        height: 40,
        backgroundColor: '#f2b655',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttontext: {
        color: '#202427',
        fontFamily: 'sans-serif-medium',
        fontSize: 16
    },
})

export default Card;