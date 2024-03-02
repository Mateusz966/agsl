import {httpClient} from '../client';
import {API_ROUTES} from '../const';
import {EditShoppingListRequest, ShoppingList, ShoppingListRequest,} from './types';

export const createShoppingList = async (dishes: ShoppingListRequest) => {
  const response = await httpClient.post(API_ROUTES.v1.shoppingList, dishes);
  return response.data;
};

export const getShoppingLists = async () => {
  const response = await httpClient.get(`${API_ROUTES.v1.shoppingList}`);

  return response.data;
};

export const getShoppingList = async (shoppingListId: string) => {
  const response = await httpClient.get<ShoppingList>(
    `${API_ROUTES.v1.shoppingList}/${shoppingListId}`,
  );

  const data = response.data;

  if (!data || !data.generatedShoppingList) {
    return;
  }

  return {
    listId: data?.id,
    createdAt: data?.createdAt,
    generatedShoppingList: data.generatedShoppingList.map(ingredient => ({
      ingredientId: ingredient.id,
      unit: ingredient.unit,
      name: ingredient.name,
      amount: ingredient.amount,
      isBought: ingredient.isBought,
    })),
  };
};

export const editShoppingList = async (
  editListData: EditShoppingListRequest,
) => {
  const {listId, shoppingListItems} = editListData;

  return await Promise.all(
    shoppingListItems?.map(async ({ingredientId, isBought}) => {
      return await httpClient.patch(
        `${API_ROUTES.v1.shoppingList}/${listId}/ingredient/${ingredientId}/${isBought}`,
      );
    }) || [],
  );
};
