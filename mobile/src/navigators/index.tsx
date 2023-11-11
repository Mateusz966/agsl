import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from '../components/pages/LoginPage';
import AddDish from '../components/pages/AddDish';
import {Scenes} from './const';
import {RootStackParamList} from './types';
import {
  addDishHeaderOptions,
  loginPageHeaderOptions,
  mainHeaderOptions,
} from './headerOptions';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => (
  <Stack.Navigator screenOptions={mainHeaderOptions}>
    <Stack.Screen
      name={Scenes.Login}
      component={LoginPage}
      options={loginPageHeaderOptions}
    />
    <Stack.Screen
      name={Scenes.AddDish}
      component={AddDish}
      options={addDishHeaderOptions}
    />
  </Stack.Navigator>
);
export default Navigation;
