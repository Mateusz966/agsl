import {DishResponse} from 'api/dish/types';

export enum RootScenes {
  Login = 'Login',
  AddDish = 'AddDish',
  DishList = 'DishList',
  Home = 'Home',
  Entry = 'Entry',
  Register = 'Register',
  EditDish = 'EditDish',
  Basket = 'Basket',
  ShoppingList = 'ShoppingList',
  UserShoppingLists = 'UserShoppingLists',
  Tab = 'Tab',
}

export type RootStackParamList = {
  Entry: undefined;
  Login: undefined;
  Register: undefined;
  AddDish: DishResponse | undefined;
  DishList: undefined;
  EditDish: undefined;
  TabBasket: undefined;
  ShoppingList: undefined;
  UserShoppingLists: undefined;
  TabDishList: undefined;
  Home: undefined;
  Basket: undefined;
  Tab: undefined;
  TabShoppingList: undefined;
};
