import {httpClient} from '../client';
import {API_ROUTES} from '../const';
import {EditShoppingListRequest, ShoppingListRequest} from './types';

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

export const editShoppingList = async (
  editListData: EditShoppingListRequest,
) => {
  const {listId, shoppingListItems} = editListData;

  const response = await Promise.all(
    shoppingListItems?.map(async ({ingredientId, isBought}) => {
      return await httpClient.patch(
        `${API_ROUTES.v1.shoppingList}/${listId}/ingredient/${ingredientId}/${isBought}`,
      );
    }) || [],
  );

  return response;
};
