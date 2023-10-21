import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {colors} from '../config/theme';

export const mainHeaderOptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: colors.white,
  },
  headerLargeTitleStyle: {
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 'light',
    color: 'gray',
  },
  contentStyle: {
    backgroundColor: colors.white,
  },
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
