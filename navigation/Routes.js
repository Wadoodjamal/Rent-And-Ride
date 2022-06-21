/*eslint-disable */

import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';

import AuthStack from './AuthStack';
import AppStack from './AppStack';

import React, {useEffect, useContext, useState} from 'react';
import { AdminStack } from './AdminStack.js';

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const {initializing, setInitializing} = useState(true);

  const onAuthStateChange = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChange);
    return subscriber;
  }, []);

  if (initializing) return null;

  // get user email and check if admin or not


  return (
    <NavigationContainer>
      {user ?  user.email === 'super@admin.com' ? <AdminStack/> : <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};



export default Routes;