import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from '../../components/pages/LoginPage';
import AddDish from '../../components/pages/AddDish';
import {Scenes} from './const';
import {RootStackParamList} from './types';
import {
  addDishHeaderOptions,
  dishListHeaderOptions,
  homeHeaderOptions,
  loginPageHeaderOptions,
  mainHeaderOptions,
} from './headerOptions';
import DishList from '../../components/organisms/DishList';
import Home from '../../components/pages/Home';

const Stack = createNativeStackNavigator<RootStackParamList>();

const DefaultNavigation = () => (
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
    <Stack.Screen
      name={Scenes.DishList}
      component={DishList}
      options={dishListHeaderOptions}
    />
    <Stack.Screen
      name={Scenes.Home}
      component={Home}
      options={homeHeaderOptions}
    />
  </Stack.Navigator>
);
export default DefaultNavigation;
