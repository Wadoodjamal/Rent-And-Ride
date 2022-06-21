/*eslint-disable */

import React, {createContext, useEffect} from 'react';
import {navigation} from 'react-native';
import auth from '@react-native-firebase/auth';
import { adduser } from '../components/firebase';
import { getUser } from '../components/firebase';
import { removeuser } from '../components/async';
import {getuser} from '../components/async.js';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({children}, {navigation}) => {
  const [user, setUser] = React.useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        // login: async (email, password) => {
        //   try {
        //     await auth().signInWithEmailAndPassword(email, password)
        //     .then( data =>{
        //       const user = getUser(data.user.uid)
        //       .then(data => {
        //         storeuser(data);
        //       })//from firebase
        //       console.log("USER: "+ user.name)
        //       // storeuser(user)//to async storage
        //       .then(data => {
        //         console.log(data);
        //       })
        //     });
        //   } catch (error) {
        //     alert(error.message);
        //   }
        // },
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password)
            .then( async(data) =>{
              // const datadata = data.user.displayName;
              // console.log(`Data is: ${datadata}`)
              // console.log(`Sign In ID: ${data.user.id}`)
              await getUser(data.user.uid).then( async (check)=>{
                try{
                  const object = {
                    id:data.user.uid,
                    name:check.name,
                    email:check.email,
                    password:check.password,};
                  const jsonValue = JSON.stringify(object);
                  console.log(jsonValue);
                  await AsyncStorage.setItem('123', jsonValue)
                  console.log(`After: ${jsonValue}`);
                  await getuser();
                }catch(err){
                  console.error(err);
                }
                
              })
              
              // console.log(getuser().name)
            });
          } catch (error) {
            alert(error.message);
          }
        },
        register: async (email, password, name) => {
          try {
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .then(async data => {
                await adduser(data.user.uid, email, name, password)
                if(email !== 'super@admin.com'){
                  const object = {
                    id:data.user.uid,
                    name:name,
                    email:email,
                    password:password,
                  };
                  const jsonValue = JSON.stringify(object);
                  await AsyncStorage.setItem('123', jsonValue)
                  await getuser();
                }
              });
            console.log("user created");
            
          } catch (error) {
            console.log(error);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
            removeuser();
          } catch (error) {
            console.log(error);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};