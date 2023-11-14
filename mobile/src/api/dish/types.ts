export enum Unit {
  g = 'g',
  ml = 'ml',
  kg = 'kg',
  l = 'l',
}

export interface Ingredient {
  ingredientId?: string;
  name: string;
  amount: string;
  unit: Unit;
}

export interface DishRequest {
  id?: string;
  name: string;
  ingredients: Ingredient[];
  photo?: Blob;
}

export interface DishResponse {
  id?: string;
  name: string;
  ingredients: Ingredient[];
  photo?: string;
}

export interface EditDishRequest {
  id: string;
  dish: FormData;
}
