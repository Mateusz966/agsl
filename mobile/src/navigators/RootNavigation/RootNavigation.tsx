import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Home,
  ShoppingList,
  Basket,
  EditDish,
  DishList,
  Entry,
  AddDish,
  Login,
  UserShoppingLists,
  Register,
} from 'pages';
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
  RootScenes,
  RootStackParamList,
} from '.';
import {AuthProvider} from 'common/contexts';
import TabNavigation from 'navigators/TabNavigation';

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
          component={TabNavigation}
          options={loginPageHeaderOptions}
        />
      </Stack.Navigator>
    </AuthProvider>
  );
};

export {
  DishNavigationStack,
  HomeNavigationStack,
  BasketNavigationStack,
  ShoppingListsNavigationStack,
};

export default RootNavigation;
