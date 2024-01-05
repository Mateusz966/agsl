import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {colors} from '../../config/theme';
import {Icon} from 'react-native-paper';
import {ICON_PATHS} from '../../utils/icons';
import React from 'react';

export const mainHeaderOptions: BottomTabNavigationOptions = {
  tabBarStyle: {height: 55, shadowColor: 'black', elevation: 5},
  headerShown: false,
  tabBarActiveTintColor: colors.white,
  tabBarActiveBackgroundColor: '#7D72C7',
  tabBarInactiveBackgroundColor: colors.primary,
  tabBarItemStyle: {
    paddingBottom: 5,
  },
  tabBarInactiveTintColor: colors.white,
  tabBarLabelStyle: {fontSize: 12},
};

export const homeNavigationHeaderOptions: BottomTabNavigationOptions = {
  title: 'Home',
  tabBarIcon: () => (
    <Icon source={ICON_PATHS.USER} size={22} color={colors.white} />
  ),
};

export const dishListNavigationHeaderOptions: BottomTabNavigationOptions = {
  title: 'Dish list',
  tabBarIcon: () => (
    <Icon source={ICON_PATHS.LIST} size={22} color={colors.white} />
  ),
};

export const basketNavigationHeaderOptions: BottomTabNavigationOptions = {
  title: 'Basket',
  tabBarIcon: () => (
    <Icon source={ICON_PATHS.BASKET} size={22} color={colors.white} />
  ),
};

export const shoppingListsNavigationHeaderOptions: BottomTabNavigationOptions =
  {
    title: 'Shopping lists',
    tabBarIcon: () => (
      <Icon source={ICON_PATHS.LIST} size={22} color={colors.white} />
    ),
  };
