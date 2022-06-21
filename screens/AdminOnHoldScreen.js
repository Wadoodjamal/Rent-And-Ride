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

// react native paper
import * as ReactPaper from 'react-native-paper';

// firestore 
import {firestore} from '@react-native-firebase/firestore';

import { Appbar } from '../components/appbar.js';

import {fetchRequestData,approveRequest,deleteRequest} from '../modal/firebase_functions.js';

const AdminOnHoldScreen = ({navigation}) => {

  const [data,setData] = React.useState([]);
  const [isLoading,setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    await fetchRequestData().then((data) => {
      setData(data);
      setLoading(false);
    })
  }

  const renderItem = ({item}) => {
    return(
      <View style={{flex:1,flexDirection:'row',height:'100%',marginBottom:'5%'}}>
  
        <ReactPaper.Avatar.Image
          size={50}
          source={require('../assets/images/profile_pic.png')}
        />
  
        <View style={styles.textColumn}>
            <Text
              style={styles.userRequestText}
              >{item.requestedBy} Requested For {item.requestedFor}</Text>
  
            <Text
              style={styles.timeDateText}
              >16:15 pm. 12-12-2022</Text>
  
            </View>
              <View
                style={styles.buttonColumn}
              >
              <TouchableOpacity
                style={styles.buttons}
                onPress={()=>{
                  if(approveRequest(item.id)){
                    alert("Request Approved");
                  }else{
                    alert("Request Not Approved");
                  }
                }}
              >
              <Text
                style={styles.buttonText}
              >Approve</Text>
              </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttons}
                  onPress={()=>{
                    if(deleteRequest(item.id)){
                    alert("Request Deleted");
                    }else{
                      alert("Request Not Deleted");
                    }
                  }}>
                    <Text
                      style={styles.buttonText}
                    >Delete</Text>
                </TouchableOpacity>
        </View>
      </View>
    )
  }

    return (
        <View style={styles.container}>
            <Appbar title="Admin Requests" navigation={navigation}/>

            {isLoading ? <ActivityIndicator size="large" color="#f2b655" /> : <>{data.length == 0?  
            <View
            style={[styles.body,{justifyContent:'center'}]}>
              <Text style={[styles.headerTitle,{textAlign:'center'}]}>No Pending Requests Found</Text>
            </View>
             : <View
              style={styles.body}>
                <FlatList
                  renderItem={renderItem}
                  data={data}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
          }</>}
              
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
      marginLeft:3,
      height:'80%',
      width:'57%',
      flexDirection:'column',
      justifyContent:'space-between',
    },
    userRequestText:{
      fontSize:14,
      fontWeight:'bold',
      color:'#676767',
    },
    timeDateText:{
      fontSize:12,
      fontWeight:'400',
      color:'#676767',
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
      backgroundColor:'#00a3ff',
      marginBottom:'5%',
    },
    buttonText:{
      fontSize:12,
      fontWeight:'bold',
      color:'white',
      textAlign:'center',
    },
  });

export {AdminOnHoldScreen};
