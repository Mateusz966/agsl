import React from 'react';
import AddDish from '../../components/pages/AddDish';
import {Scenes} from '../DefaultNavigation/const';
import {mainHeaderOptions} from '../DefaultNavigation/headerOptions';
import DishList from '../../components/organisms/DishList';
import Home from '../../components/pages/Home';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigation = () => (
  <Tab.Navigator screenOptions={mainHeaderOptions}>
    <Tab.Screen name={Scenes.AddDish} component={AddDish} />
    <Tab.Screen name={Scenes.DishList} component={DishList} />
    <Tab.Screen name={Scenes.Home} component={Home} />
  </Tab.Navigator>
);
export default BottomNavigation;
