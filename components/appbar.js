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
import {renderItems} from '../components/render_cars.js';

export const Appbar = ({title,navigation}) => {
    return(
        <ReactPaper.Appbar style={{flexDirection:'row',width:'100%',justifyContent:'space-between',backgroundColor:'#f2b655',marginBottom:'8%'}}>
            <ReactPaper.Appbar.BackAction
                onPress={() => navigation.navigate('AdminDashboardScreen')}
                style={{backgroundColor:'white'}}
            />
            <ReactPaper.Appbar.Content
                title={title}
                color='white'
                style={{marginLeft:'13%'}}
                
            />
    </ReactPaper.Appbar>
    );
}

