import React from 'react';
import {
  basketNavigationHeaderOptions,
  dishListNavigationHeaderOptions,
  homeNavigationHeaderOptions,
  mainHeaderOptions,
  shoppingListsNavigationHeaderOptions,
} from './headerOptions';

import {BottomNavigationScenes} from './const';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BasketNavigationStack,
  DishNavigationStack,
  HomeNavigationStack,
  ShoppingListsNavigationStack,
} from '../RootNavigation';

const Tab = createBottomTabNavigator();

const BottomBar = () => (
  <Tab.Navigator screenOptions={mainHeaderOptions}>
    <Tab.Screen
      name={BottomNavigationScenes.Home}
      component={HomeNavigationStack}
      options={homeNavigationHeaderOptions}
    />
    <Tab.Screen
      name={BottomNavigationScenes.DishList}
      component={DishNavigationStack}
      options={dishListNavigationHeaderOptions}
    />
    <Tab.Screen
      name={BottomNavigationScenes.Basket}
      component={BasketNavigationStack}
      options={basketNavigationHeaderOptions}
    />
    <Tab.Screen
      name={BottomNavigationScenes.UserShoppingLists}
      component={ShoppingListsNavigationStack}
      options={shoppingListsNavigationHeaderOptions}
    />
  </Tab.Navigator>
);

export default BottomBar;
