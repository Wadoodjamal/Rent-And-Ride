/*eslint-disable */

import * as React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, navigation, Image, Alert } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { getUser, requestcar } from '../components/firebase';
import {getuser} from '../components/async';

const ViewCar = ({navigation, route}) => {
    const car = route.params.item    
    console.log(car)
    const[totalrent, settotalrent] = React.useState(0);
    const[days,setdays] = React.useState(0);
    
    React.useEffect ( () => {
        settotalrent(car.ratePerHour*parseInt(days));
    });
    return (
        <View style={styles.main}>

        <Image source={require('../images/car.jpg')} style = {styles.image}/>
      <View style={styles.details}>
        <Text style = {styles.name}>{car.company}</Text>
        <Text style = {styles.secondtext}>Category: {car.category}</Text>
        <Text style = {styles.secondtext}>Rent/Day: Rs.{car.ratePerHour}</Text>
        <View style={styles.fields}>
                        <FontAwesome name="calendar-o" size={23} color="white" style={styles.icon} />
                        <TextInput placeholder= "   Enter Days" style = {styles.inputfield} onChangeText={setdays}/>
                        
        </View>
        <Text style = {styles.secondtext}>Total Rent: Rs.{totalrent}/-</Text>
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>    
            <TouchableOpacity style={styles.BookNowButton}  
                            onPress={async ()=>{                          
                                const day = parseInt(days);
                                await getUser();
                                await requestcar(car.id, false, "Hussain", car.company, "1234", day , totalrent);
                                Alert.alert("Car rental request sent successfully!");
                            }
                                }
                            >
                                <Text style={styles.buttontext}>Request car!</Text>
            </TouchableOpacity>
        </View>
    </View> 
     
      </View>
      

    )
} 

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#202427',
        flex: 1,
        alignItems: 'center',
        
        
    },
    image: {
        width: 300,
        height: 300,
        marginTop: 100,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    details: {
        backgroundColor: 'white',
        width: 300,
        height: 300,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        paddingLeft: 10,
    },
    name: {
        fontSize: 40,
        color: 'black',
        fontFamily: 'sans-serif-medium'

    },
    secondtext: {
        color: 'black',
        fontSize: 20
    },
    fields: {
        display: 'flex', flexDirection: 'row', backgroundColor: '#202427', borderRadius: 20, width: 200, paddingLeft:10,
        marginTop: 5,      
    },
    icon: {
        backgroundColor: '#202427', 
        borderRadius: 20, 
        paddingTop:12,
    },
    inputfield: {
        width: 250, 
        height: 50,
        borderColor: 'black',
        color: 'white',      
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

export default ViewCar;