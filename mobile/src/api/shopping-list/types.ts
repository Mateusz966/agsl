export interface ShoppingListElement {
  id: string;
  quantity: number;
}

export interface ShoppingListRequest {
  dishesId: ShoppingListElement[];
}
