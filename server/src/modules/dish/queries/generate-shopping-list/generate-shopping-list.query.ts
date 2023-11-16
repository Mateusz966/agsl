import {
  ShoppingListElement
} from '@modules/dish/queries/generate-shopping-list/generate-shopping-list.dto';

export class GenerateShoppingListQuery {
  userId: string;
  dishes: ShoppingListElement[];

  constructor(userId: string, dishes: ShoppingListElement[]) {
    this.userId = userId;
    this.dishes = dishes;
  }
}
