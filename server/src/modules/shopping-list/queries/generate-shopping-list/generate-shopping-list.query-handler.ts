import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GenerateShoppingListQuery } from '@modules/shopping-list/queries/generate-shopping-list/generate-shopping-list.query';
import { DataSource } from 'typeorm';
import { ShoppingListModel } from '@modules/shopping-list/database/shopping-list.model';
import { v4 } from 'uuid';
import { ShoppingListStatus } from '@modules/shopping-list/dtos/shopping-list.response.dto';

@QueryHandler(GenerateShoppingListQuery)
export class GenerateShoppingListQueryHandler implements IQueryHandler {
  constructor(private dataSource: DataSource) {}

  async execute({ userId, ingredients }: GenerateShoppingListQuery) {
    const shoppingListRepo = this.dataSource.getRepository(ShoppingListModel);

    return await shoppingListRepo.save({
      id: v4(),
      generatedShoppingList: ingredients,
      status: ShoppingListStatus.Draft,
      user: { id: userId },
    });
  }
}
