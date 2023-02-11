import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from '../components/pages/LoginPage';

const Stack = createNativeStackNavigator();

const Navigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginPage} />
  </Stack.Navigator>
);
export default Navigation;
