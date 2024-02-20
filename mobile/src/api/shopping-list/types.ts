import {Ingredient} from '../dish/types';

export interface ShoppingListElement {
  id: string;
  quantity: number;
}

export interface ShoppingListRequest {
  dishesId: ShoppingListElement[];
}

export interface ShoppingListItem extends Ingredient {
  isBought: boolean;
}

export interface ShoppingList {
  id: string;
  createdAt: string;
  generatedShoppingList: ShoppingListItem[];
}

export interface ShoppingListResponse {
  userShoppingLists: ShoppingList[];
}
export type IsBoughtType = 'true' | 'false';

export interface ShoppingListItemToEdit {
  ingredientId: string;
  isBought: IsBoughtType;
}

export interface EditShoppingListRequest {
  listId: string;
  shoppingListItems: ShoppingListItemToEdit[];
}
