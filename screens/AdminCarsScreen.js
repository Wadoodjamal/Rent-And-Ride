/* eslint-disable */

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
import {Appbar} from '../components/appbar.js';

const AdminCarsScreen = ({navigation}) => {

    const [snapshot,setSnapshot] = React.useState([]);
    const [isLoading,setLoading] = React.useState(true);
    
    React.useEffect(() => {
        fetchData();
    })

    const fetchData = async () => {
        const cars = await fetchCarsData().then(async (cars) => {
            setSnapshot(cars);
            setLoading(false);
        });
    }
    
    
    return (
        <View style={styles.container}>

            <Appbar title="Admin Cars" navigation={navigation}/>
            
            {isLoading ? <ActivityIndicator size="large" color="#00a3ff" /> : snapshot.length == 0 ?  
             <View
             style={[styles.body,{justifyContent:'center'}]}>
               <Text style={[styles.headerTitle,{textAlign:'center'}]}>No Cars Found. Add some cars first by clicking on the button below.</Text>
             </View> :
            <>
            <View style={{marginHorizontal:'6%',height:'80%',alignSelf:'stretch'}}>
                    
                <FlatList
                    renderItem={({item}) => renderItems(item,navigation)}
                    data={snapshot}
                    keyExtractor={(item,index) => index.toString()}
                />

            </View>
            </>
        }          

        <View style={{alignItems:'flex-end',marginRight:'2%',backgroundColor:'transparent'}}>
            <TouchableOpacity
                onPress = {() => navigation.navigate('AdminAddCarScreen')}
                style={{
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,0.2)',
                alignItems: 'center',
                justifyContent: 'center',
                width: 50,
                position: 'absolute',
                height: 50,
                backgroundColor: '#f2b655',
                borderRadius: 100,
                }}
                >
                <Icon name="plus" size={22} color="white" />
                </TouchableOpacity>
            </View>

        </View>
      );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#202427',
        flex:1,
        flexDirection:'column',
        width:'100%',
      },
    header: {
        width: '100%',
        backgroundColor:'#00a3ff',
        color:'#00a3ff',
        height:'25%',
        flexDirection:'row',
        borderBottomLeftRadius:190,
        borderBottomRightRadius:190,
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:'5%',
        paddingVertical:'2%',
        paddingHorizontal:'12%',
    },
    body:{
        height:'80%',
        alignSelf:'stretch',
        marginHorizontal:15,
        flexDirection:'column',
    },
    headerTitle:{
        fontSize:30,
        fontWeight:'bold',
        color:'#f2b655',
    },
  });

export {AdminCarsScreen};