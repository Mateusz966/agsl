import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootScenes, RootStackParamList} from './types';
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

const DishNavigationStack = () => {
  return (
    <Stack.Navigator screenOptions={mainHeaderOptions}>
      <Stack.Screen
        name={RootScenes.DishList}
        component={DishList}
        options={dishListHeaderOptions}
      />
      <Stack.Screen
        name={RootScenes.AddDish}
        component={AddDish}
        options={addDishHeaderOptions}
      />
      <Stack.Screen
        name={RootScenes.EditDish}
        component={EditDish}
        options={editDishHeaderOptions}
      />
      <Stack.Screen
        name={RootScenes.Basket}
        component={Basket}
        options={basketHeaderOptions}
      />
      <Stack.Screen
        name={RootScenes.ShoppingList}
        component={ShoppingList}
        options={shoppingListHeaderOptions}
      />
    </Stack.Navigator>
  );
};

const HomeNavigationStack = () => {
  return (
    <Stack.Navigator screenOptions={mainHeaderOptions}>
      <Stack.Screen
        name={RootScenes.Home}
        component={Home}
        options={homeHeaderOptions}
      />
      <Stack.Screen
        name={RootScenes.DishList}
        component={DishList}
        options={dishListHeaderOptions}
      />
      <Stack.Screen
        name={RootScenes.AddDish}
        component={AddDish}
        options={addDishHeaderOptions}
      />
      <Stack.Screen
        name={RootScenes.EditDish}
        component={EditDish}
        options={editDishHeaderOptions}
      />
      <Stack.Screen
        name={RootScenes.Basket}
        component={Basket}
        options={basketHeaderOptions}
      />
      <Stack.Screen
        name={RootScenes.ShoppingList}
        component={ShoppingList}
        options={shoppingListHeaderOptions}
      />
    </Stack.Navigator>
  );
};

const BasketNavigationStack = () => {
  return (
    <Stack.Navigator screenOptions={mainHeaderOptions}>
      <Stack.Screen
        name={RootScenes.Basket}
        component={Basket}
        options={basketHeaderOptions}
      />
      <Stack.Screen
        name={RootScenes.DishList}
        component={DishList}
        options={dishListHeaderOptions}
      />
      <Stack.Screen
        name={RootScenes.UserShoppingLists}
        component={UserShoppingLists}
        options={userShoppingListsHeaderOptions}
      />
      <Stack.Screen
        name={RootScenes.ShoppingList}
        component={ShoppingList}
        options={shoppingListHeaderOptions}
      />
    </Stack.Navigator>
  );
};

const ShoppingListsNavigationStack = () => {
  return (
    <Stack.Navigator screenOptions={mainHeaderOptions}>
      <Stack.Screen
        name={RootScenes.UserShoppingLists}
        component={UserShoppingLists}
        options={userShoppingListsHeaderOptions}
      />
      <Stack.Screen
        name={RootScenes.ShoppingList}
        component={ShoppingList}
        options={shoppingListHeaderOptions}
      />
    </Stack.Navigator>
  );
};

const RootNavigation = () => {
  return (
    <AuthProvider>
      <Stack.Navigator screenOptions={mainHeaderOptions}>
        <Stack.Screen
          name={RootScenes.Entry}
          component={Entry}
          options={loginPageHeaderOptions}
        />
        <Stack.Screen
          name={RootScenes.Login}
          component={Login}
          options={loginPageHeaderOptions}
        />
        <Stack.Screen
          name={RootScenes.Register}
          component={Register}
          options={loginPageHeaderOptions}
        />
        <Stack.Screen
          name={RootScenes.Tab}
          component={BottomBar}
          options={loginPageHeaderOptions}
        />
      </Stack.Navigator>
    </AuthProvider>
  );
};

export {
  RootNavigation,
  DishNavigationStack,
  HomeNavigationStack,
  BasketNavigationStack,
  ShoppingListsNavigationStack,
};
