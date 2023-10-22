import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {colors} from '../config/theme';

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
};
