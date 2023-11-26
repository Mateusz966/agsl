import {Ingredient} from '../../../api/dish/types';

export interface DishListResponse {
  id: string;
  createdAt: Date;
  ingredients: Ingredient[];
  name: string;
  photo?: string;
}
