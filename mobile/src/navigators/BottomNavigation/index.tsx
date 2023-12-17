import React from 'react';
import AddDish from '../../components/pages/AddDish';
import {Scenes} from '../DefaultNavigation/const';
import {mainHeaderOptions} from '../DefaultNavigation/headerOptions';
import Home from '../../components/pages/Home';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import DishList from '../../components/pages/DishList';
import {
  BasketNavigation,
  DishNavigation,
  HomeNavigation,
  ShoppingListsNavigation,
} from '../DefaultNavigation';
import {BottomNavigationScenes} from './const';
import {colors} from '../../config/theme';
import {ICON_PATHS} from '../../utils/icons';
import {Avatar, Icon} from 'react-native-paper';
import AvatarImage from 'react-native-paper/lib/typescript/components/Avatar/AvatarImage';
import {Image} from 'react-native-svg';
import EntryScreenPhoto from '../../assets/EntryScreenPhoto';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomBar = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: {height: 55, shadowColor: 'black', elevation: 5},
      header: () => <></>,
      tabBarActiveTintColor: colors.white,
      tabBarActiveBackgroundColor: '#7D72C7',
      tabBarInactiveBackgroundColor: colors.primary,
      tabBarItemStyle: {
        paddingBottom: 5,
        borderTopColor: colors.secondary,
        borderTopWidth: 2,
      },
      tabBarInactiveTintColor: colors.white,
      tabBarLabelStyle: {fontSize: 12},
    }}>
    <Tab.Screen
      name={BottomNavigationScenes.Home}
      component={HomeNavigation}
      options={{
        title: 'Home',
        tabBarIcon: () => (
          <Icon source={ICON_PATHS.USER} size={22} color={colors.white} />
        ),
      }}
    />
    <Tab.Screen
      name={BottomNavigationScenes.DishList}
      component={DishNavigation}
      options={{
        title: 'Dish list',
        tabBarIcon: () => (
          <Icon source={ICON_PATHS.LIST} size={22} color={colors.white} />
        ),
      }}
    />
    <Tab.Screen
      name={BottomNavigationScenes.Basket}
      component={BasketNavigation}
      options={{
        title: 'Basket',
        tabBarIcon: () => (
          <Icon source={ICON_PATHS.BASKET} size={22} color={colors.white} />
        ),
      }}
    />
    <Tab.Screen
      name={BottomNavigationScenes.UserShoppingLists}
      component={ShoppingListsNavigation}
      options={{
        title: 'Shopping lists',
        tabBarIcon: () => (
          <Icon source={ICON_PATHS.LIST} size={22} color={colors.white} />
        ),
      }}
    />
  </Tab.Navigator>
);
export default BottomBar;
