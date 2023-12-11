import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {colors} from '../config/theme';
import React from 'react';
import DishListNavigationHeader from '../components/organisms/DishListNavigationHeader';
import {Text} from 'react-native-paper';

export const mainHeaderOptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: colors.primary,
  },
  contentStyle: {
    backgroundColor: colors.surface,
  },
  headerTintColor: 'white',
  headerTitle: ({children, tintColor}) => (
    <Text
      variant="titleLarge"
      style={{
        color: tintColor,
      }}>
      {children}
    </Text>
  ),
};

export const loginPageHeaderOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export const addDishHeaderOptions: NativeStackNavigationOptions = {
  title: 'Add meal',
};

export const editDishHeaderOptions: NativeStackNavigationOptions = {
  title: 'Edit meal',
};

export const dishListHeaderOptions: NativeStackNavigationOptions = {
  title: 'Dish list',
  headerRight: () => <DishListNavigationHeader />,
};

export const basketHeaderOptions: NativeStackNavigationOptions = {
  title: 'Basket',
};

export const shoppingListHeaderOptions: NativeStackNavigationOptions = {
  title: 'Shopping list',
};

export const userShoppingListsHeaderOptions: NativeStackNavigationOptions = {
  title: 'Your shopping lists',
};
