import React from 'react';
import {
  basketNavigationHeaderOptions,
  dishListNavigationHeaderOptions,
  homeNavigationHeaderOptions,
  mainHeaderOptions,
  shoppingListsNavigationHeaderOptions,
} from './headerOptions';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BasketNavigationStack,
  DishNavigationStack,
  HomeNavigationStack,
  ShoppingListsNavigationStack,
} from '../RootNavigation';
import {TabScenes} from './types';

const Tab = createBottomTabNavigator();

const BottomBar = () => (
  <Tab.Navigator screenOptions={mainHeaderOptions}>
    <Tab.Screen
      name={TabScenes.TabHome}
      component={HomeNavigationStack}
      options={homeNavigationHeaderOptions}
    />
    <Tab.Screen
      name={TabScenes.TabDishList}
      component={DishNavigationStack}
      options={dishListNavigationHeaderOptions}
    />
    <Tab.Screen
      name={TabScenes.TabBasket}
      component={BasketNavigationStack}
      options={basketNavigationHeaderOptions}
    />
    <Tab.Screen
      name={TabScenes.TabUserShoppingLists}
      component={ShoppingListsNavigationStack}
      options={shoppingListsNavigationHeaderOptions}
    />
  </Tab.Navigator>
);

export default BottomBar;
