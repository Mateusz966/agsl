import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from '../components/pages/LoginPage';
import AddDish from '../components/pages/AddDish';
import {Scenes} from './const';
import {RootStackParamList} from './types';
import {
  addDishHeaderOptions,
  dishListHeaderOptions,
  loginPageHeaderOptions,
  mainHeaderOptions,
} from './headerOptions';
import DishList from '../components/organisms/DishList';
import Entry from '../components/pages/Entry';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => (
  <Stack.Navigator screenOptions={mainHeaderOptions}>
    <Stack.Screen
      name={Scenes.Entry}
      component={Entry}
      options={loginPageHeaderOptions}
    />
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
    <Stack.Screen
      name={Scenes.DishList}
      component={DishList}
      options={dishListHeaderOptions}
    />
  </Stack.Navigator>
);
export default Navigation;
