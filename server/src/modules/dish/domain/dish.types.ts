// All properties that a Dish has
import { Ingredients } from '@modules/dish/domain/value-objects/ingredients.value-object';

export interface DishProps {
  name: string;
  ingredients: Ingredients;
  photo?: string;
}

// Properties that are needed for a dish creation
export interface CreateDishProps {
  name: string;
  ingredients: Ingredients;
  photo?: string;
}

export enum UserRoles {
  admin = 'admin',
  user = 'user',
}
