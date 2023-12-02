import {httpClient} from '../client';
import {API_ROUTES} from '../const';
import {ShoppingListRequest} from './types';

export const createShoppingList = async (dishes: ShoppingListRequest) => {
  const response = await httpClient.post(API_ROUTES.v1.shoppingList, dishes);
  return response.data;
};

export const getShoppingLists = async () => {
  const response = await httpClient.get(`${API_ROUTES.v1.shoppingList}`);

  return response.data;
};

export const getShoppingList = async (shoppingListId: string) => {
  const response = await httpClient.get(
    `${API_ROUTES.v1.shoppingList}/${shoppingListId}`,
  );
  return response.data;
};
