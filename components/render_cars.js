/*eslint-disable */

import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
  FlatList
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import * as ReactPaper from 'react-native-paper';
import {car} from '../assets/images/car.png';
import { fetchCarsData,deleteCar } from '../modal/firebase_functions';

// render items for the car list


export const renderItems = (item,navigation) => {
    return(
        <TouchableOpacity style={{marginBottom:'7%',alignSelf:'stretch',borderWidth:2,borderColor:'#f2b655',borderStyle:"solid",borderRadius:15,padding:'5%'}} onLongPress={()=>{deleteCar(item.id)}}>
              
                <View style={{flexDirection:'row',justifyContent:'space-between',alignContent:'stretch'}}>
                    <View>
                        <Text style={{fontSize:22,fontWeight:'bold',color:'white'}}>{item.company}</Text>
                        <Text style={{fontSize:12,fontWeight:'400',color:'white'}}>{item.model}</Text>
                        <View style={{flexDirection:'row'}}>
                            <Icon name='star' size={12} color='white' style={{marginRight:'7%'}}/>
                            <Text style={{fontSize:12,fontWeight:'400',color:'white'}}>{item.rating} Rating</Text>
                        </View>
                        
                        <Text style={{fontSize:12,fontWeight:'400',color:'white'}}>{item.rate} Per Day</Text>
                    </View>
                    {item.imageURL == '' ? 
                        <Image source={require('../assets/images/car.png')} style={{width:'50%',height:'80%'}} /> :  
                        <Image source={{uri:item.imageURL}} resizeMode='cover' style={{width:'50%',height:'80%',borderRadius:15}} />
                    }                
                </View>
                
                <TouchableOpacity 
                    onPress={() => navigation.navigate('AdminEditCarScreen',{
                        id:item.id,
                    })}
                    style={{alignSelf:'center',backgroundColor:'#f2b655',marginTop:'5%',paddingVertical:'2%',paddingHorizontal:'15%',borderRadius:15}}>
                    <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>Edit Car</Text>
                </TouchableOpacity>
            </TouchableOpacity>
    );           
}