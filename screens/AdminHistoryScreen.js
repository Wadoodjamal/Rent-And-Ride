/* eslint-disable */

import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ActivityIndicator
} from 'react-native';


import * as ReactPaper from 'react-native-paper';
import {fetchApprovedRequestsData} from '../modal/firebase_functions.js';

import { Appbar } from '../components/appbar.js';

const AdminHistoryScreen = ({navigation}) => {

  const [data,setData] = React.useState([]);
  const [isLoading,setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchData();
  })

  const fetchData = async () => {
    await fetchApprovedRequestsData().then((data) => {
      setData(data);
      setLoading(false);
    })
  }

  const renderItem = ({item}) => {
    return(
      <View style={{flex:1,flexDirection:'row',height:'100%',marginBottom:'5%'}}>
        <ReactPaper.Avatar.Image
                size={45}
                source={require('../assets/images/profile_pic.png')}
                />

                <View style={styles.textColumn}>

                    <Text
                    style={styles.userRequestText}
                    >{item.requestedBy} rented {item.requestedFor}</Text>

                    <Text
                    style={styles.timeDateText}
                    >16:15 pm. 12-12-2022</Text>

                </View>
      </View>
      );
  }

  return (
        <View style={styles.container}>

            <Appbar title="Admin History" navigation={navigation}/>

            {
            isLoading ? 
            <ActivityIndicator size="large" color="#f2b655" /> : <>{data.length == 0?  
            <View
            style={[styles.body,{justifyContent:'center'}]}>
              <Text style={[styles.headerTitle,{textAlign:'center'}]}>No User Has Rented Yet</Text>
            </View> :
            <View
            style={styles.body}>
                <FlatList
                  data={data}
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
        backgroundColor:'#00a3ff',
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
      marginHorizontal:15,
      flexDirection:'column',
    },
    textColumn:{
      marginLeft:'7%',
      marginTop:'2%',
      height:'70%',
      width:'57%',
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
  });

export {AdminHistoryScreen};
