import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Scenes} from './const';

export type RootStackParamList = {
  Login: undefined;
  AddDish: undefined;
};

export type AddDishNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  Scenes.AddDish
>;
