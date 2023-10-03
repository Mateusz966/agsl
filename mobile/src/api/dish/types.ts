export enum Unit {
  g = 'g',
  ml = 'ml',
  kg = 'kg',
  l = 'l',
}

export interface Ingredient {
  name: string;
  amount: number;
  unit: Unit;
}
export interface DishRequest {
  name: string;
  photo?: Blob;
  ingredients: Ingredient[];
}
