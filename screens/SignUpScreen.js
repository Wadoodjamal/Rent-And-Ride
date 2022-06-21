/*eslint-disable */

import React, { useState, useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ImageBackground, navigation, Alert } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AuthContext} from '../navigation/AuthProvider';
import { adduser } from '../components/firebase';

const SignUpScreen = ({navigation}) => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const {register} = useContext(AuthContext);
    return (
        <View style={styles.main}>
            <ImageBackground resizeMode="cover" source={require('../images/background.jpg')} style={styles.image} blurRadius={3}>         
                <View style= {styles.frame}>
                    <Text style ={styles.signin}>Create Account</Text>   
                    <View style={styles.fields}>
                        <AntDesign name="user" size={25} color="white" style={styles.icon} />
                        <TextInput placeholder= "Your name" style = {styles.inputfield} onChangeText={(userName) => setName(userName)}/>
                    </View>       
                    <View style={styles.fields}>
                        <AntDesign name="mail" size={25} color="white" style={styles.icon}/>
                        <TextInput placeholder='Your email' style = {styles.inputfield} onChangeText={(userEmail) => setEmail(userEmail)}/>
                    </View>
                    <View style={styles.fields}>
                        <AntDesign name="lock" size={25} color="white" style={styles.icon}/>
                        <TextInput placeholder='Password' secureTextEntry={true} style = {styles.inputfield} onChangeText={(userPassword) => setPassword(userPassword)}/>
                    </View>
                    <View style={styles.fields}>
                        <AntDesign name="lock" size={25} color="white" style={styles.icon}/>
                        <TextInput placeholder='Confirm password' secureTextEntry={true} style = {styles.inputfield} onChangeText={userConfirmPassword => setConfirmPassword(userConfirmPassword)}/>
                    </View>               
                    <View style={styles.buttonframe}>
                        <TouchableOpacity style={styles.button} onPress={() => {
                            if (name == null || email == null || password == null || confirmPassword == null){
                                Alert.alert("Please Fill all the given fields");
                              }
                            else if(password.length<6){
                                Alert.alert("Password should be at least 6 characters!")
                            }
                            else if(password != confirmPassword){
                              Alert.alert("Confirm password wrong");
                            }

                            else{
                            register(email, password, name)
                            // adduser(email, name, password)
                            Alert.alert("Signed Up Successfully!")
                            
                            
                            }
                        }}>
                            <Text style={styles.buttontext}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.extratext}>
                        <Text style={{fontSize: 15, color: 'white'}}>Already a user?</Text>
                        <TouchableOpacity onPress={()=> navigation.navigate('SignInScreen')}>
                            <Text style={styles.signup}>Sign in!</Text>
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

export {SignUpScreen};