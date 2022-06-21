/* eslint-disable */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import AdminOnHoldScreen from './AdminOnHoldScreen';
import {AuthContext} from '../navigation/AuthProvider';


// firebase functions
import {approvedRequestsCollectionLength,carsCollectionLength,usersCollectionLength,requestCollectionLength} from '../modal/firebase_functions';



// make a component that returns a view
const AdminDashboardScreen = ({navigation}) => {
  const [cars, setCars] = React.useState(null);
  const [users,setUsers] = React.useState(null);
  const [onHold,setOnHold] = React.useState(null);
  const [history,setHistory] = React.useState(null);
  const [isLoading,setLoading] = React.useState(true);
  const {logout} = React.useContext(AuthContext);

  React.useEffect( () => {
    fetchData()
  });

  const fetchData = async () => {
    setCars(await carsCollectionLength());
    setUsers(await usersCollectionLength());
    setOnHold(await requestCollectionLength());
    setHistory(await approvedRequestsCollectionLength());
    setLoading(false);
  }

  return (
        <View style={styles.container}>         
          {
          isLoading ? 
          <ActivityIndicator size="large" color="#f2b655" /> : 
          <>
             <View style={styles.upperRow}>
             <TouchableOpacity style={styles.sections} onPress={() => {
              setCars(null);
              setHistory(null);
              setOnHold(null);
              setUsers(null);
              setLoading(true);
              navigation.navigate('AdminCarsScreen')
              }}>
               <Text style={styles.sectionTitle}>Cars</Text>
               <Text style={styles.sectionSubTitle}>{cars}</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.sections} onPress={() => {
              setCars(null);
              setHistory(null);
              setOnHold(null);
              setUsers(null);
              setLoading(true);
              navigation.navigate('AdminUsersScreen')
              }}>
               <Text style={styles.sectionTitle}>Users</Text>
               <Text style={styles.sectionSubTitle}>{users}</Text>
             </TouchableOpacity>
           </View>

            <View style={styles.lowerRow}>
              <TouchableOpacity style={styles.sections} onPress={() => {
                setCars(null);
                setHistory(null);
                setOnHold(null);
                setUsers(null);
                setLoading(true);
                navigation.navigate('AdminOnHoldScreen')
                }}>
                <Text style={styles.sectionTitle}>On Hold</Text>
                <Text style={styles.sectionSubTitle}>{onHold}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sections} onPress={() => {
                setCars(null);
                setHistory(null);
                setOnHold(null);
                setUsers(null);
                setLoading(true);
                navigation.navigate('AdminHistoryScreen')
                }}>
                <Text style={styles.sectionTitle}>Rental History</Text>
                <Text style={styles.sectionSubTitle}>{history}</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex:0.2}}>
            <TouchableOpacity 
              style={{alignSelf:'center',width:'65%',borderRadius:20,backgroundColor:'#f2b655',marginTop:'2%',alignItems:'center'}}
              onPress={() => logout()}
              >
                <Text style={{color:'white',fontSize:20,paddingVertical:'4%'}}>Logout</Text>
            </TouchableOpacity>    
            </View>
            </>
          }
         
          
        </View>
      );
};

const styles = StyleSheet.create({
    upperRow: {
      flex: 1,
      flexWrap: 'wrap',
      flexDirection: 'row',
      padding: 10,
      alignContent:'flex-end',
    },
    lowerRow: {
      flex: 1,
      flexWrap: 'wrap',
      flexDirection: 'row',
      padding: 10,
      alignContent:'flex-start',
    },
    container:{
      backgroundColor:'#202427',
      flex:1,
      justifyContent:'center',
      flexDirection:'column',
      width:'100%',
    },
    sections:{
      borderColor:'#f3f3f3',
      backgroundColor:'#f2b655',
      borderWidth:2,
      margin:'5%',
      padding:'5%',
      borderRadius:15,
      width:'40%',
      height:'55%',
    },
    sectionTitle:{
      fontSize:30,
      fontWeight:'bold',
      textAlign:'left',
      color:'white',
    },
    sectionSubTitle:{
      fontSize:40,
      fontWeight:'500',
      textAlign:'auto',
      color:'white',
      marginTop:'20%',
    },
  });

export {AdminDashboardScreen};
