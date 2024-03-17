import { ListItem } from '@modules/shopping-list/queries/generate-shopping-list/generate-shopping-list.http.controller';

export class GenerateShoppingListQuery {
  userId: string;
  ingredients: ListItem[];

  constructor(userId: string, ingredients: ListItem[]) {
    this.userId = userId;
    this.ingredients = ingredients;
  }
}
