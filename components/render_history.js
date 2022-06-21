/*eslint-disable */

import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList
  } from 'react-native';
import * as ReactPaper from 'react-native-paper';

// render item for the rental history screen
export const renderItem = ({item}) => {
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
