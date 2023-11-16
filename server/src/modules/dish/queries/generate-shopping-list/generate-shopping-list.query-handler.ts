import { DishMapper } from '@modules/dish/dish.mapper';
import { DishModelRepository } from '@modules/dish/database/dish-model.repository';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FileService } from '@modules/file-handler/file.service';
import { GenerateShoppingListQuery } from '@modules/dish/queries/generate-shopping-list/generate-shopping-list.query';
import { IngredientsModelRepository } from '@modules/dish/database/ingredients-model.repository';

@QueryHandler(GenerateShoppingListQuery)
export class GetUserDishesQueryHandler implements IQueryHandler {
  constructor(
    private readonly ingredientsRepo: IngredientsModelRepository,
    private readonly dishMapper: DishMapper,
  ) {}

  async execute({ userId, dishes }: GenerateShoppingListQuery): Promise<any> {
    const shoppingList = await Promise.all(
      dishes.map(async ({ id, quantity }) => {
        const ingredients = await this.ingredientsRepo.findOne({
          where: { dish: { id } },
        });
      }),
    );
  }
}
