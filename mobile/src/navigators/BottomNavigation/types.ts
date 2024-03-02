import {MaterialBottomTabNavigationOptions} from '@react-navigation/material-bottom-tabs';
import {colors} from '../../config/theme';

export const mainHeaderOptions: MaterialBottomTabNavigationOptions = {
  tabBarColor: colors.primary,
};

export const addDishHeaderOptions: MaterialBottomTabNavigationOptions = {};

export const dishListHeaderOptions: MaterialBottomTabNavigationOptions = {
  title: 'Dish list',
};
