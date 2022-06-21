/*eslint-disable */

import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignInScreen } from '../screens/SignInScreen.js';
import { SignUpScreen } from '../screens/SignUpScreen.js';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return(
        <Stack.Navigator>
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{
          title: '',
          headerTransparent: true,
          headerStyle: {
        
          },
          headerTintColor: 'white',
      
          headerTitleStyle: {
            fontFamily:'sans-serif-light',
          },
          headerTitleAlign: 'center'
        }}/>   
      </Stack.Navigator>
    );
}
export default AuthStack;