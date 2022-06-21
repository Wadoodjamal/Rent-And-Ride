/*eslint-disable */

import React,{useContext} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ImageBackground,ActivityIndicator, navigation } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {updateUser} from '../modal/firebase_functions';
import {AuthContext} from '../navigation/AuthProvider';
import { getuser,removeuser } from '../components/async';


const ViewProfile = ({navigation}) => {

    const [name,setName] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [cPassword,setcPassword] = React.useState('');
    const [data,setData] = React.useState({});
    const [isLoading,setLoading] = React.useState(true);
    const [id,setID] = React.useState('');


    React.useEffect(() => {
        
        getuser().then((response)=>{
            setData(response);
            setLoading(false);
        })
    });

    return (
        <View style={styles.main}>
            {isLoading? <ActivityIndicator size={34} color='white'/> : 
                <ImageBackground resizeMode="cover" source={require('../images/background.jpg')} style={styles.image} blurRadius={3}>         
                <View style= {styles.frame}>
                <AntDesign name="edit" size={55} color="white" style={styles.icon} />   
                    <View style={styles.fields}>
                        <AntDesign name="user" size={25} color="white" style={styles.icon} />
                        <TextInput placeholder= {data.name} style = {styles.inputfield} onChangeText={text => setName(text)} />
                    </View>       
                    <View style={styles.fields}>
                        <AntDesign name="mail" size={25} color="white" style={styles.icon}/>
                        <TextInput placeholder={data.email} style = {styles.inputfield} onChangeText={text => setEmail(text)}/>
                    </View>
                    <View style={styles.fields}>
                        <AntDesign name="lock" size={25} color="white" style={styles.icon}/>
                        <TextInput placeholder={data.password} style = {styles.inputfield} onChangeText={text => setPassword(text)}/>
                    </View>
                    <View style={styles.fields}>
                        <AntDesign name="lock" size={25} color="white" style={styles.icon}/>
                        <TextInput placeholder={data.password} style = {styles.inputfield} onChangeText={text => setcPassword(text)}/>
                    </View>                
                    <View style={styles.buttonframe}>
                        <TouchableOpacity style={[styles.button,{marginTop:'30%'}]} onPress={() => {
                            if(name != '' && email != '' && password != '' && cPassword != ''){
                                if(password == cPassword){
                                    updateUser(data.id,name,email,password).then( async ()=>{
                                        alert('check console');                
                                    })
                                }
                            }
                        }}>
                            <Text style={styles.buttontext}>Update Profile</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>           
            </ImageBackground> 
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
        marginTop: 90,
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
        marginRight: 165, 
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

export default ViewProfile;

// await removeuser();
                                        // try{
                                        //     const object = {
                                        //       id:,
                                        //       name:check.name,
                                        //       email:check.email,
                                        //       password:check.password,};
                                        //     const jsonValue = JSON.stringify(object);
                                        //     console.log(jsonValue);
                                        //     await AsyncStorage.setItem('123', jsonValue)
                                        //     console.log(`After: ${jsonValue}`);
                                        //     await getuser();
                                        //   }catch(err){
                                        //     console.error(err);
                                        //   }
                                        // alert('Profile updated successfully');