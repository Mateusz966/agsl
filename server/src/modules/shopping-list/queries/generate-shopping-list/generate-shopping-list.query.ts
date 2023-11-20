import { IngredientsModel } from '@modules/dish/database/ingredients.model';

export class GenerateShoppingListQuery {
  userId: string;
  ingredients: IngredientsModel[];

  constructor(userId: string, ingredients: IngredientsModel[]) {
    this.userId = userId;
    this.ingredients = ingredients;
  }
}
