/*eslint-disable */

import React from 'react';
import type {Node} from 'react';

//React navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens for admin
import * as screens from '../screens/index.js';


const Stack = createNativeStackNavigator();

const AdminStack = () => {


  return (
     <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='AdminDashboardScreen' component={screens.AdminDashboardScreen}/>
        <Stack.Screen name='AdminCarsScreen' component={screens.AdminCarsScreen}/>
        <Stack.Screen name='AdminHistoryScreen' component={screens.AdminHistoryScreen}/>
        <Stack.Screen name='AdminOnHoldScreen' component={screens.AdminOnHoldScreen}/>
        <Stack.Screen name='AdminUsersScreen' component={screens.AdminUsersScreen}/>
        <Stack.Screen name='AdminAddCarScreen' component={screens.AdminAddCarScreen}/>
      <Stack.Screen name='AdminEditCarScreen' component={screens.AdminEditCarScreen}/>
     </Stack.Navigator>
  );
};

export {AdminStack};
