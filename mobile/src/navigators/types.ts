import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Scenes} from './const';
import {DishResponse} from '../api/dish/types';

export type RootStackParamList = {
  Entry: undefined;
  Login: undefined;
  Register: undefined;
  AddDish: DishResponse | undefined;
  DishList: undefined;
  EditDish: undefined;
};

export type AddDishNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  Scenes.AddDish
>;

export type DishListNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  Scenes.DishList
>;

export type EditDishNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  Scenes.EditDish
>;
