/* eslint-disable */

import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';


import * as ReactPaper from 'react-native-paper';
import {fetchUsersData,blockUnblockUser,deleteUser} from '../modal/firebase_functions.js';

import { renderItem } from '../components/render_users';
import { Appbar } from '../components/appbar.js';

const AdminUsersScreen = ({navigation}) => {

  const [users, setUsers] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchUsersData().then(user => {
      setUsers(user)
      setLoading(false)
    });
  });

  return (
        <View style={styles.container}>

            <Appbar title="Admin Users" navigation={navigation}/>

            {
            isLoading ? 
            <ActivityIndicator size="large" color="#f2b655" /> : <>{users.length == 0?  
            <View
            style={[styles.body,{justifyContent:'center'}]}>
              <Text style={[styles.headerTitle,{textAlign:'center'}]}>No Current Users Found</Text>
            </View> :
            <View
            style={styles.body}>
                <FlatList
                  data={users}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()}
                  
                />    
            </View>
            }
            </>}

        </View>
        
      );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#202427',
        flex:1,
        flexDirection:'column',
        width:'100%',
      },
    header: {
        width: '100%',
        backgroundColor:'#f2b655',
        color:'#00a3ff',
        height:'25%',
        borderBottomLeftRadius:160,
        borderBottomRightRadius:160,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20,
    },
    headerTitle:{
        fontSize:30,
        fontWeight:'bold',
        color:'#f2b655',
    },
    body:{
        flex:1,
        height:'100%',
        alignSelf:'stretch',
        marginHorizontal:'3%',
        flexDirection:'column',
    },
    textColumn:{
      marginLeft:'1%',
      height:'80%',
      width:'55%',
      flexDirection:'column',
      justifyContent:'space-between',
    },
    userRequestText:{
      fontSize:14,
      fontWeight:'bold',
      color:'white',
    },
    timeDateText:{
      fontSize:12,
      fontWeight:'400',
      color:'white',
    },
    buttonColumn:{
      marginLeft:2,
      height:'90%',
      width:'28%',
      flexDirection:'column',
      justifyContent:'space-between',
    },
    buttons:{
      paddingVertical:'4%',
      borderRadius:15,
      backgroundColor:'#f2b655',
      marginBottom:'5%',
    },
    buttonText:{
      fontSize:12,
      fontWeight:'bold',
      color:'white',
      textAlign:'center',
    },
  });

  export { AdminUsersScreen };
