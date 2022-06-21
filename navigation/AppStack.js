// In App.js in a new project
import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import ViewProfile from '../screens/ViewProfile';
import ViewCar from '../screens/Viewcar';

import { transparent } from 'react-native-paper/lib/typescript/styles/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

import CustomDrawer from '../components/CustomDrawer';
import SearchScreen from '../screens/search';
import { color } from 'react-native-reanimated';



const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <>
    <Drawer.Navigator useLegacyImplementation drawerContent={props => <CustomDrawer {...props}/>} initialRouteName='HomeScreen'
    screenOptions={{
      headerTitleAlign: 'center',
      drawerActiveBackgroundColor: '#f2b655',
    }}  
    >
   
      <Drawer.Screen name="HomeScreen" component={HomeScreen} 
      options={{
        title: 'Home',
        headerTransparent: true,      
        headerBackVisible: false,
        headerStyle: {
          backgroundColor: 'grey',
        },
        drawerLabelStyle: {
          color: 'white'
        },
        headerTintColor: 'white',
    
        headerTitleStyle: {
          fontFamily:'sans-serif-light',
        },
        headerTitleAlign: 'center',
        
          headerRight: () => (
            <TouchableOpacity
   style={{
       borderWidth:1,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:35,
       height:35,
       backgroundColor:'transparent',
       marginRight:8,
       borderRadius:50,
     }}
 >
   <AntDesign name={"setting"}  size={30} color="white" />
 </TouchableOpacity>
          ),
      }}/>

      <Drawer.Screen name="SearchScreen" component={SearchScreen} 
      options={{
        title: 'Search cars',
        headerTransparent: true,      
        headerBackVisible: false,
        headerStyle: {
          backgroundColor: 'grey',
        },
        drawerLabelStyle: {
          color: 'white'
        },
        headerTintColor: 'white',
    
        headerTitleStyle: {
          fontFamily:'sans-serif-light',
        },
        headerTitleAlign: 'center',
      }}
      />
      
      <Drawer.Screen name="ViewCar" component={ViewCar} options={{
          title: 'Car Details',
          // headerShown: false,
          headerTransparent: true,
          drawerItemStyle: { display: 'none' },
          headerStyle: {
        
          },
          drawerLabelStyle: {
            color: 'white'
          },
          headerTintColor: 'white',
      
          headerTitleStyle: {
            fontFamily:'sans-serif-light',
          },
          headerTitleAlign: 'center'
        }}/>
        <Drawer.Screen name="ViewProfile" component={ViewProfile} 
      options={{
        title: 'Personal info',
        headerTransparent: true,      
        headerBackVisible: false,
        headerStyle: {
          backgroundColor: 'grey',
        },
        drawerLabelStyle: {
          color: 'white'
        },
        headerTintColor: 'white',
    
        headerTitleStyle: {
          fontFamily:'sans-serif-light',
        },
        headerTitleAlign: 'center',
        
          headerRight: () => (
            <TouchableOpacity
   style={{
       borderWidth:1,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:35,
       height:35,
       backgroundColor:'transparent',
       
       marginRight:8,
       borderRadius:50,
     }}
 >
   <AntDesign name={"logout"}  size={30} color="white" />
 </TouchableOpacity>
          ),
      }}
      /> 

    </Drawer.Navigator>
    </>
  );
}

export default AppStack;
