import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from '../components/pages/LoginPage';
import AddDish from '../components/pages/AddDish';
import {Scenes} from './const';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => (
  <Stack.Navigator>
    <Stack.Screen name={Scenes.Login} component={LoginPage} />
    <Stack.Screen name={Scenes.AddDish} component={AddDish} />
  </Stack.Navigator>
);
export default Navigation;
