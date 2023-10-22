import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Scenes} from './const';
import {DishRequest} from '../api/dish/types';

export type RootStackParamList = {
  Login: undefined;
  AddDish: DishRequest | undefined;
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
