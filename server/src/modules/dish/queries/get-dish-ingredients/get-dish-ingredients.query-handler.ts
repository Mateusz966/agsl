import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { GetDishIngredientsQuery } from '@modules/dish/queries/get-dish-ingredients/get-dish-ingredients.query';
import { IngredientsModelRepository } from '@modules/dish/database/ingredients-model.repository';
import { IngredientsModel } from '@modules/dish/database/ingredients.model';

@QueryHandler(GetDishIngredientsQuery)
export class GetDishIngredientsQueryHandler implements IQueryHandler {
  constructor(private readonly ingredientsRepo: IngredientsModelRepository) {}

  async execute({
    dishes,
  }: GetDishIngredientsQuery): Promise<IngredientsModel[]> {
    return (
      await Promise.all(
        dishes.map(async ({ id, quantity }) => {
          const ingredients = await this.ingredientsRepo.find({
            where: { dish: { id } },
          });

          return ingredients.map((ingredient) => ({
            ...ingredient,
            amount: ingredient.amount * quantity,
          }));
        }),
      )
    )?.flat?.();
  }
}
