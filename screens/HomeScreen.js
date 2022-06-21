/*eslint-disable */

import * as React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ImageBackground, navigation, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Card from '../components/card';

import { fetchAllCarsData, fetchSuv, fetchSedan, fetchSports, fetchHatch } from '../components/firebase';


const HomeScreen = ({navigation}) => {

    const [data,setData] = React.useState([]); 
    const [isloading, setisloading] = React.useState(true);
    const [suv, setsuv] = React.useState(false);
    const [sedan, setsedan] = React.useState(false);
    const [sports, setsports] = React.useState(false);
    const [hatch, sethatch]  = React.useState(false);
    const [allcars, setallcars] = React.useState(true);
    const [banner, setBanner] = React.useState('All cars');
    
    

    React.useEffect(()=>{
        if(allcars){
            fetchAllCarsData().then((response)=>{
                setData(response);
                setisloading(false);
            })
        }
        else if(suv){
            fetchSuv().then((response)=>{
                setData(response);
                setisloading(false);
            })
        }
        else if(sedan){
            fetchSedan().then((response)=>{
                setData(response);
                setisloading(false);
            })
        }
        else if(sports){
            fetchSports().then((response)=>{
                setData(response);
                setisloading(false);
            })
        }
        else if(hatch){
            fetchHatch().then((response)=>{
                setData(response);
                setisloading(false);
            })
        }
        // fetchAllCarsData().then((response)=>{
        //     setData(response);
        //     setisloading(false);
        // })
    })
   
    const renderItem = ({ item }) => (
         
        <Card value = {item.rating} imageURL={item.imageURL}  name = {item.company} price = {item.ratePerHour} available = {item.isAvailable} navigation={navigation} booking = {item} />
        );
    return (
        
        
        <View style={styles.main}>
            {/* <ImageBackground resizeMode="cover" source={require('../images/background.jpg')} style={styles.image} blurRadius={12}>          */}
                        <View style= {{width: 300, height: 50, marginTop: 60, justifyContent: 'center', alignSelf: 'center', alignItems:'center'
                    , borderRadius: 15}}>
                            <Text>Start your Journey Now!</Text>
                            <Text>Choose cars from our premium cars fleet!</Text>
                        </View>
                        <View style = {styles.category}>
                            {/* <Text>Select Category:</Text> */}
                            <TouchableOpacity style = {styles.categoryNames} 
                            onPress={()=>{
                                setBanner("All Cars");
                                setallcars(true);
                                setsuv(false);
                                setsedan(false);
                                setsports(false);
                                sethatch(false);
                            }}
                            >
                                <Text style = {styles.Cattext}>All Cars</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.categoryNames} 
                            onPress={()=>{
                                setBanner("Suv");
                                setallcars(false);
                                setsuv(true);
                                setsedan(false);
                                setsports(false);
                                sethatch(false);
                            }}
                            >
                                <Text style = {styles.Cattext}>SUV</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.categoryNames} 
                            onPress={()=>{
                                setBanner("Sedan");
                                setallcars(false);
                                setsuv(false);
                                setsedan(true);
                                setsports(false);
                                sethatch(false);
                            }}
                            >
                                <Text style = {styles.Cattext}>Sedan</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.categoryNames} 
                            onPress={()=>{
                                setBanner("Sports");
                                setallcars(false);
                                setsuv(false);
                                setsedan(false);
                                setsports(true);
                                sethatch(false);
                        }}
                            >
                                <Text style = {styles.Cattext}>Sports</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.categoryNames} 
                            onPress={()=>{
                                setBanner("Hatch");
                                setallcars(false);
                                setsuv(false);
                                setsedan(false);
                                setsports(false);
                                sethatch(true);
                        }}
                            >
                                <Text style = {styles.Cattext}>Hatch</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
                        <Text style={{fontSize: 30}}>{banner}</Text>
                        </View>
                        {isloading ? null: 
                        <View style= {{display: 'flex', alignItems: 'center', justifyContent:'center', marginTop: 30,  flex: 1 }}>
                        {/* <ScrollView style = {{}}> */}
                        <FlatList
                  data={data}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()}
                  
                />
            </View>
            }
        </View>
    );

}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#202427',
        flex: 1,
        height: '100%',
    },
    frame: {
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 120,
    },
    frametext: {
        fontFamily: 'sans-serif',
        fontSize: 20,
        color: 'black',
    },
    inputfield: {
        width: 250, 
        height: 50,
        borderColor: 'black',
        color: 'white',      
    },
    text: {
        fontFamily: 'sans-serif-medium',
        fontSize: 45,
        color: 'white'
    },
    signin: {
        fontFamily: 'sans-serif-light',
        fontSize: 35,
        color: 'white',
        marginRight: 145, 
    },
    fields: {
        display: 'flex', flexDirection: 'row', backgroundColor: '#202427', borderRadius: 20, width: 300, paddingLeft:10,
        marginTop: 40,      
    },
    buttonframe: {
        justifyContent:'center', 
        alignItems: 'center', 
        marginTop: 40,
    },
    button: {
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
    image: {
        height: '100%', 
        width: '100%', 
        borderRadius: 20,
    },
    icon: {
        backgroundColor: '#202427', 
        borderRadius: 20, 
        paddingTop:12,
    },
    signup: {
        fontSize: 15, 
        color: 'white', 
        textDecorationLine: 'underline',
    },
    extratext: {
        justifyContent:'center', 
        alignItems: 'center', 
        marginTop: 30,
    },
    category: {
        direction: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-evenly', 
        backgroundColor: '#f2b655', 
        alignItems: 'center',
        height: 40,
        paddingBottom: 10,
    },
    categoryNames: {
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
});

export default HomeScreen;