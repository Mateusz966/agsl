import { DishMapper } from '@modules/dish/dish.mapper';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GenerateShoppingListQuery } from '@modules/shopping-list/queries/generate-shopping-list/generate-shopping-list.query';
import { IngredientsModelRepository } from '@modules/dish/database/ingredients-model.repository';
import { DataSource } from 'typeorm';
import { ShoppingListModel } from '@modules/dish/database/shopping-list.model';
import { v4 } from 'uuid';

@QueryHandler(GenerateShoppingListQuery)
export class GenerateShoppingListQueryHandler implements IQueryHandler {
  constructor(
    private readonly ingredientsRepo: IngredientsModelRepository,
    private dataSource: DataSource,

    private readonly dishMapper: DishMapper,
  ) {}

  async execute({ userId, dishes }: GenerateShoppingListQuery) {
    const list = await Promise.all(
      dishes.map(async ({ id, quantity }) => {
        const ingredients = await this.ingredientsRepo.find({
          where: { dish: { id } },
        });

        return ingredients.map((ingredient) => ({
          ...ingredient,
          amount: ingredient.amount * quantity,
        }));
      }),
    );

    const shoppingListRepo = this.dataSource.getRepository(ShoppingListModel);

    const shoppingList = await shoppingListRepo.save({
      id: v4(),
      generatedShoppingList: list?.flat(),
      isDraft: true,
      user: { id: userId },
    });

    return shoppingList;
  }
}
