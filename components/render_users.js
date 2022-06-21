/*eslint-disable */

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

export const renderItem = ({item}) => {
    return(
      <View style={{flex:1,flexDirection:'row',height:'100%',marginBottom:'5%'}}>
      <ReactPaper.Avatar.Image
                size={50}
                source={require('../assets/images/profile_pic.png')}
                />

                <View style={styles.textColumn}>

                    <Text
                    style={styles.userRequestText}
                    >{item.name}</Text>

                    <Text
                    style={styles.timeDateText}
                    >16:15 pm. 12-12-2022</Text>

                </View>

                <View
                style={styles.buttonColumn}
                >
                    <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => {
                      if(item.isBlocked == true){
                        blockUnblockUser(item.id,false);
                        alert("User Unblocked");
                      }else{
                        blockUnblockUser(item.id,true);
                        alert("User Blocked");
                      }
                    }}
                    >
                        <Text
                        style={styles.buttonText}
                        >{item.isBlocked == true? 'Unblock' : 'Block'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={styles.buttons}
                    onPress={()=>{
                      if(deleteUser(item.id)){
                        alert("User Deleted"); 
                      }else{
                        alert("User Not Deleted");
                      }
                     
                    }}
                    >
                        <Text
                        style={styles.buttonText}
                        >Delete</Text>
                    </TouchableOpacity>

                </View>
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
        color:'white',
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