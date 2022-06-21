/* eslint-disable */

import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Dimensions
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import * as paper from 'react-native-paper';
import {car} from '../assets/images/car.png';
import DropDownPicker, {DropdownPicker} from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';
import {updateCar,pickImage,uploadImage} from '../modal/firebase_functions.js';

const AdminEditCarScreen = ({navigation,route}) => {
    const {id} = route.params;
    const [name,setName] = React.useState("");
    const [company,setCompany] = React.useState("");
    const [model,setModel] = React.useState("");
    const [rate,setRate] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [items, setItems] = React.useState([
      {label: 'SUV', value: 'suc'},
      {label: 'Sedan', value: 'sedan'},
      {label: 'Hatch', value: 'hatch'},
      {label: 'Sports', value: 'sports'},
    ]);
    const [date,setDate] = React.useState(new Date());
    const [selectedDate,setSelectedDate] = React.useState(new Date());
    const [show,setShow] = React.useState(false);
    const [imageName,setImageName] = React.useState("");
    const [imagePath,setImagePath] = React.useState("");

    const width = Dimensions.get('window').width;

    return (
        <View style={styles.container}>
          <View style={{flex:1,marginHorizontal:'5%',justifyContent:'center'}}>
            <TouchableOpacity 
            onPress={async ()=>{
              let prop = await pickImage();
              setImagePath(prop.imagePath);
              setImageName(prop.imageName);
            }}
            style={{width:'50%',height:'20%',justifyContent:'center',alignItems:'center',borderWidth:3,borderStyle:'dashed',borderColor:'grey',borderRadius:20,alignSelf:'center'}}>
              {imagePath!==""?<Image
              resizeMode='contain' 
              source={{uri:imagePath}}  
              style={{width:'105%',height:'105%',borderRadius:15}}/>: <Icon name="plus" size={54} />}
            </TouchableOpacity>
            
            <Text style={{marginTop:'10%',color:'white',fontSize:18,fontWeight:'bold'}}>Owner Name</Text>

            <TextInput 
              placeholder='Owner Name'
              value={name}     
              onChangeText={text => setName(text)}
              style={{padding:'2%',borderRadius:15,alignContent:'stretch',marginTop:'4%',borderColor:'#f2b655',borderWidth:2}}
            />

            <View style={{flexDirection:'row',marginTop:'7%'}}>
              <Text style={{color:'white',fontSize:18,fontWeight:'bold',marginRight:'28%'}}>Company</Text>
              <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>Model</Text>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'5%'}}>
            <TextInput 
              placeholder='Company'
              value={company}
              onChangeText={text => setCompany(text)}
              style={{width:'48%',borderRadius:15,borderColor:'#f2b655',borderWidth:2,height:'72%',padding:'5%'}}
            />
            <TextInput 
              placeholder='Model'
              value={model}     
              onChangeText={text => setModel(text)}
              style={{width:'48%',borderRadius:15,borderColor:'#f2b655',borderWidth:2,height:'72%',padding:'5%'}}
            />
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'3%'}}>
              <DropDownPicker
                 placeholder='Car Type'
                 open={open}
                 value={value}
                 items={items}
                 setOpen={setOpen}
                 setValue={setValue}
                 setItems={setItems}
                 style={{alignContent:"stretch",borderRadius:15,borderColor:'#f2b655',borderWidth:2,padding:'5%',}}
                 
              />
            </View>

            <TouchableOpacity style={{borderRadius:20,backgroundColor:'#f2b655',marginTop:'5%',alignItems:'center'}} onPress={()=>setShow(!show)}>
              <Text style={{color:'white',fontSize:20,padding:'2%'}}>Modal Year</Text>
            </TouchableOpacity>    

            {show && (
              <DatePicker
                style={{width: width,height:200}}
                testID="dateTimePicker"
                value={date}
                mode="date"
                date={date}
                placeholder="select date"
                format="YYYY-MM-DD"
                onConfirm={(date) => setSelectedDate(selectedDate)}
                onCancel={() => setShow(false)}
                onDateChange={(date) => setSelectedDate(date)}
              />
            )}

            <Text style={{marginTop:'5%',color:'white',fontSize:18,fontWeight:'bold'}}>Rate Per Day</Text>

            <TextInput 
              placeholder='Rate Per Day'
              value={rate}     
              onChangeText={text => setRate(text)}
              style={{padding:'2%',borderRadius:15,alignContent:'stretch',marginTop:'4%',borderColor:'#f2b655',borderWidth:2}}
            />

            <TouchableOpacity style={{alignSelf:'center',width:'70%',borderRadius:20,backgroundColor:'#f2b655',marginTop:'5%',alignItems:'center'}} onPress={
              async ()=>{
                console.log(id);
                if(name!="" && company!="" && model!="" && value!="" && rate!="" && imageName!="" && imagePath!=""){
                  let url = await uploadImage(imagePath,imageName);
                  await updateCar(id,name,company,model,value,rate,url,selectedDate.getFullYear()).then(()=>{
                    alert("Car Updated Successfully");
                  });
                }else{
                  alert("Please fill all fields before adding car.");
                }
              }
            }>
              <Text style={{color:'white',fontSize:20,padding:'2%'}}>Update Car</Text>
            </TouchableOpacity>    
          </View>
        </View>
    );
}

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
        flexDirection:'row',
        borderBottomLeftRadius:190,
        borderBottomRightRadius:190,
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:'5%',
        paddingVertical:'2%',
        paddingHorizontal:'12%',
    },
    headerTitle:{
        fontSize:30,
        fontWeight:'bold',
        color:'white',
    },
  });

export {AdminEditCarScreen};
