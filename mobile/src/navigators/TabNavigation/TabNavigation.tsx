import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BasketNavigationStack,
  HomeNavigationStack,
  DishNavigationStack,
  ShoppingListsNavigationStack,
} from '../RootNavigation';
import {
  basketNavigationHeaderOptions,
  dishListNavigationHeaderOptions,
  homeNavigationHeaderOptions,
  mainHeaderOptions,
  shoppingListsNavigationHeaderOptions,
  TabScenes,
} from '.';

const Tab = createBottomTabNavigator();

const TabNavigation = () => (
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

export default TabNavigation;
