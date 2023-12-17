import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddDish from '../components/pages/AddDish';
import {Scenes} from './const';
import {RootStackParamList} from './types';
import {
  addDishHeaderOptions,
  basketHeaderOptions,
  dishListHeaderOptions,
  editDishHeaderOptions,
  loginPageHeaderOptions,
  mainHeaderOptions,
  shoppingListHeaderOptions,
  userShoppingListsHeaderOptions,
} from './headerOptions';
import DishList from '../components/organisms/DishListView';
import Entry from '../components/pages/Entry';
import Login from '../components/pages/Login';
import Register from '../components/pages/Register';
import EditDish from '../components/pages/EditDish';
import Basket from '../components/pages/Basket';
import UserShoppingLists from '../components/pages/UserShoppingLists';
import ShoppingList from '../components/pages/ShoppingList';
import {AuthProvider} from '../common/contexts/AuthContext/AuthProvider';

const Stack = createNativeStackNavigator<RootStackParamList>();

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
        <Stack.Screen
          name={Scenes.UserShoppingLists}
          component={UserShoppingLists}
          options={userShoppingListsHeaderOptions}
        />
      </Stack.Navigator>
    </AuthProvider>
  );
};
export default Navigation;
