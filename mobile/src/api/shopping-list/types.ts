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
  generatedShoppingList: ShoppingListItem[];
}

export interface ShoppingListResponse {
  userShoppingLists: ShoppingList[];
}

export interface EditShoppingListRequest {
  listId: string;
  ingredientId: string;
  isBought: boolean;
}
