import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ImageBackground, navigation } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { FlatList } from 'react-native-gesture-handler';
import SearchComponent from '../components/SearchComponent';
import { fetchAllCarsData } from '../components/firebase';

const SearchScreen = ({navigation}) => {

    const [data,setData] = React.useState([]); 
    const [isloading, setisloading] = React.useState(true);
    const [filtereddata, settfiltereddata] = React.useState([]); 
    
    React.useEffect(()=>{
        
            fetchAllCarsData().then((response)=>{
                setData(response);  
                                                        
            });
        },
       
        );
     const renderItem = ({ item }) => (
         
        <SearchComponent name = {item.company} imageURL ={item.imageURL} rent= {item.ratePerHour} navigation= {navigation} booking = {item}></SearchComponent>
    );
    
   const searchCar = (text) => {
       
    settfiltereddata( 
        
        data.filter(i => 
            i.company.toLowerCase().includes(text.toLowerCase())))
            
    
    }
    
    return (
        <View style={styles.main}>
                    
                <View style= {styles.frame}>   
                    <View style={styles.fields}>
                        <AntDesign name="search1" size={25} color="#202427" style={styles.icon} />
                        <TextInput placeholder= "Search cars here" style = {styles.inputfield} 
                        onChangeText = {text => {
                            searchCar(text);
                            setisloading(false);
                            if(text =='')
                            setisloading(true);
                            
                        }}/>
                    </View>
                    <View> 
                    {isloading ? null: 
                    <View style= {{display: 'flex',height: 500, alignItems: 'center', justifyContent:'center', marginTop: 0, width: 320  }}>
                        {/* <ScrollView style = {{}}> */}
                        <FlatList
                  data={filtereddata}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()}
                  
                />

                    </View>
                        }
                        </View>
                           
                    
                    
                </View>           
            
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
        marginTop: 80,
    },
    frametext: {
        fontFamily: 'sans-serif',
        fontSize: 20,
        color: 'black',
    },
    inputfield: {
        width: 250, 
        height: 50,
        backgroundColor: 'grey',
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
        marginRight: 165, 
    },
    fields: {
        display: 'flex', flexDirection: 'row', backgroundColor: 'grey', borderRadius: 20, width: 300, paddingLeft:10,
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
        backgroundColor: 'transparent', 
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
});

export default SearchScreen;