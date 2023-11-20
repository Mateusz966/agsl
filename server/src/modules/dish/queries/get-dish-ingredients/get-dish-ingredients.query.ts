export class GetDishIngredientsQuery {
  dishesId: string[];

  constructor(dishesId: string[]) {
    this.dishesId = dishesId;
  }
}
