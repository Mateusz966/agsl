import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {colors} from '../../config/theme';
import NavigationButton from '../../components/molecules/NavigationButton';
import React from 'react';
import {Scenes} from './const';
import {ICON_PATHS} from '../../utils/icons';
import HomeHeader from '../../components/molecules/HomeHeader';

export const mainHeaderOptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: colors.primary,
  },
  contentStyle: {
    backgroundColor: colors.surface,
  },
  headerTintColor: 'white',
};

export const loginPageHeaderOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export const addDishHeaderOptions: NativeStackNavigationOptions = {
  title: 'Add meal',
};

export const dishListHeaderOptions: NativeStackNavigationOptions = {
  title: 'Dish list',
  headerRight: () => (
    <NavigationButton
      sceneName={Scenes.AddDish}
      iconSource={ICON_PATHS.ADD_ICON}
    />
  ),
};

export const homeHeaderOptions: NativeStackNavigationOptions = {
  title: 'Hello, Vix',
  header: () => <HomeHeader />,
};
