import { ShoppingListElement } from '@modules/shopping-list/queries/generate-shopping-list/generate-shopping-list.dto';

export class GetDishIngredientsQuery {
  dishes: ShoppingListElement[];

  constructor(dishes: ShoppingListElement[]) {
    this.dishes = dishes;
  }
}
