/*eslint-disable */

import React, { useContext, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ImageBackground, Alert ,navigation } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AuthContext} from '../navigation/AuthProvider';

const SignInScreen = ({navigation}) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const {login} = useContext(AuthContext);

    return (
        <View style={styles.main}>
            <ImageBackground resizeMode="cover" source={require('../images/background.jpg')} style={styles.image} blurRadius={3}>         
                <View style= {styles.frame}>
                    <Text style ={styles.signin}>Welcome Back</Text>   
                    <View style={styles.fields}>
                        <AntDesign name="user" size={25} color="white" style={styles.icon} />
                        <TextInput placeholder= "Enter Email" style = {styles.inputfield} onChangeText={(userEmail) => setEmail(userEmail)}/>
                    </View>       
                    <View style={styles.fields}>
                        <AntDesign name="lock" size={25} color="white" style={styles.icon}/>
                        <TextInput placeholder='Enter Password' style = {styles.inputfield} secureTextEntry={true} onChangeText={(userPassword) => setPassword(userPassword)}/>
                    </View>               
                    <View style={styles.buttonframe}>
                        <TouchableOpacity style={styles.button} onPress={() => {
                            if(email == null || password == null){
                                Alert.alert("Attention: Please Fill all the Given Fields");
                            }
                            else{                         
                                login(email, password);
                                // Alert.alert('Signed In Successfully');
                            }
                            }  
                            }>
                            <Text style={styles.buttontext}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.extratext}>
                        <Text style={{fontSize: 15, color: 'white'}}>Don't have an account?</Text>
                        <TouchableOpacity onPress={()=> 
                            navigation.navigate('SignUpScreen')}>
                            <Text style={styles.signup}>Signup Now!</Text>
                        </TouchableOpacity>
                    </View>
                </View>           
            </ImageBackground> 
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
});

export {SignInScreen};