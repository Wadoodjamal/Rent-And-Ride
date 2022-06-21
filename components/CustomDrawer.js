/*eslint-disable */

import {StyleSheet, View, navigation, Image, Text} from 'react-native';
import React, {useContext} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import {AuthContext} from '../navigation/AuthProvider';
import { color } from 'react-native-reanimated';
import {getuser} from '../components/async.js';


const CustomDrawer = (props) => {
  const {logout} = useContext(AuthContext);

  const [user,setUser] = React.useState({});
  const [isLoading,setLoading] = React.useState(true);
  
  React.useEffect(()=>{
    setTimeout(() => {fetchData()},1300);
   
  });

  const fetchData = async () => {
    await getuser().then((data)=>{
      console.log(data);
      setUser(data);
      setLoading(false);
    })
  }

    return(
      
            <View style = {{flex: 1}}>
              {isLoading ? <Text>Is Loading...</Text> : 
              <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#202427'}}>
              <View style ={{padding: 20, backgroundColor: 'black'}}>
                <Image source={require('../images/logo.png')} 
                style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
                ></Image>
                <Text style={{fontSize: 18, color: 'white'}}>{user.name}</Text>
              </View>
              <View style= {{flex: 1, backgroundColor: '#202427', paddingTop: 10}}>
            <DrawerItemList {...props} />
                <View>
                <DrawerItem
                label="My History"
                labelStyle={{
                    
                    
                    
                    color: 'white'
                  }}
                onPress={()=>{props.navigation.navigate('HomeScreen')}}
                activeTintColor="#e91e63"
                activeBackgroundColor="red"
                />
                
                <DrawerItem
                labelStyle={{
                 color: 'white',
                 marginLeft: -20,
                }}
                icon={() => (
                  <AntDesign name="logout" color='white' size={15} />
                )}
                label="Sign Out"
                
                onPress={() => {
                  logout();
                }}
              />
                </View>
                </View>
                
            </DrawerContentScrollView>}
            
            <View style = {{backgroundColor: '#202427', height: '48%'}}></View>
            </View>
    );
} 
export default CustomDrawer;