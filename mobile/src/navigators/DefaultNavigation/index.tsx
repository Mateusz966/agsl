import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Scenes} from './const';
import {RootStackParamList} from './types';
import {
  addDishHeaderOptions,
  basketHeaderOptions,
  dishListHeaderOptions,
  editDishHeaderOptions,
  homeHeaderOptions,
  loginPageHeaderOptions,
  mainHeaderOptions,
  shoppingListHeaderOptions,
  userShoppingListsHeaderOptions,
} from './headerOptions';
import {AuthProvider} from '../../common/contexts/AuthContext/AuthProvider';
import Entry from '../../components/pages/Entry';
import Register from '../../components/templates/Register';
import DishList from '../../components/pages/DishList';
import EditDish from '../../components/pages/EditDish';
import Basket from '../../components/pages/Basket';
import ShoppingList from '../../components/pages/ShoppingList';
import UserShoppingLists from '../../components/pages/UserShoppingLists';
import Login from '../../components/pages/Login';
import AddDish from '../../components/pages/AddDish';
import Home from '../../components/pages/Home';
import BottomBar from '../BottomNavigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const DishNavigation = () => {
  return (
    <Stack.Navigator screenOptions={mainHeaderOptions}>
      <Stack.Screen
        name={Scenes.DishList}
        component={DishList}
        options={dishListHeaderOptions}
      />
      <Stack.Screen
        name={Scenes.AddDish}
        component={AddDish}
        options={addDishHeaderOptions}
      />
      <Stack.Screen
        name={Scenes.EditDish}
        component={EditDish}
        options={editDishHeaderOptions}
      />
      <Stack.Screen
        name={Scenes.Basket}
        component={Basket}
        options={basketHeaderOptions}
      />
      <Stack.Screen
        name={Scenes.ShoppingList}
        component={ShoppingList}
        options={shoppingListHeaderOptions}
      />
    </Stack.Navigator>
  );
};

const HomeNavigation = () => {
  return (
    <Stack.Navigator screenOptions={mainHeaderOptions}>
      <Stack.Screen
        name={Scenes.Home}
        component={Home}
        options={homeHeaderOptions}
      />
      <Stack.Screen
        name={Scenes.DishList}
        component={DishList}
        options={homeHeaderOptions}
      />
      <Stack.Screen
        name={Scenes.AddDish}
        component={AddDish}
        options={addDishHeaderOptions}
      />
      <Stack.Screen
        name={Scenes.EditDish}
        component={EditDish}
        options={editDishHeaderOptions}
      />
      <Stack.Screen
        name={Scenes.Basket}
        component={Basket}
        options={basketHeaderOptions}
      />
      <Stack.Screen
        name={Scenes.ShoppingList}
        component={ShoppingList}
        options={shoppingListHeaderOptions}
      />
    </Stack.Navigator>
  );
};

const BasketNavigation = () => {
  return (
    <Stack.Navigator screenOptions={mainHeaderOptions}>
      <Stack.Screen
        name={Scenes.Basket}
        component={Basket}
        options={basketHeaderOptions}
      />
      <Stack.Screen
        name={Scenes.DishList}
        component={DishList}
        options={homeHeaderOptions}
      />
      <Stack.Screen
        name={Scenes.UserShoppingLists}
        component={UserShoppingLists}
        options={userShoppingListsHeaderOptions}
      />
      <Stack.Screen
        name={Scenes.ShoppingList}
        component={ShoppingList}
        options={shoppingListHeaderOptions}
      />
    </Stack.Navigator>
  );
};

const ShoppingListsNavigation = () => {
  return (
    <Stack.Navigator screenOptions={mainHeaderOptions}>
      <Stack.Screen
        name={Scenes.UserShoppingLists}
        component={UserShoppingLists}
        options={userShoppingListsHeaderOptions}
      />
      <Stack.Screen
        name={Scenes.ShoppingList}
        component={ShoppingList}
        options={shoppingListHeaderOptions}
      />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <AuthProvider>
      <Stack.Navigator screenOptions={mainHeaderOptions}>
        <Stack.Screen
          name={Scenes.Entry}
          component={Entry}
          options={loginPageHeaderOptions}
        />
        <Stack.Screen
          name={Scenes.Login}
          component={Login}
          options={loginPageHeaderOptions}
        />
        <Stack.Screen
          name={Scenes.Register}
          component={Register}
          options={loginPageHeaderOptions}
        />
        <Stack.Screen
          name={Scenes.Tab}
          component={BottomBar}
          options={loginPageHeaderOptions}
        />
      </Stack.Navigator>
    </AuthProvider>
  );
};
export {
  Navigation,
  DishNavigation,
  HomeNavigation,
  BasketNavigation,
  ShoppingListsNavigation,
};
