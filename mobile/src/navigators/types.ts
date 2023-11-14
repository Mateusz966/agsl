import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Scenes} from './const';
import {DishResponse} from '../api/dish/types';

export type RootStackParamList = {
  Login: undefined;
  AddDish: DishResponse | undefined;
  DishList: undefined;
};

export type AddDishNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  Scenes.AddDish
>;

export type DishListNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  Scenes.DishList
>;
