import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Scenes} from './const';

export type RootStackParamList = {
  Login: undefined;
  AddDish: undefined;
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
