import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DataSource } from 'typeorm';
import { ModifyShoppingListCommand } from '@modules/shopping-list/commands/modify-shopping-list/modify-shopping-list.command';
import { HttpException, HttpStatus } from '@nestjs/common';
import { ShoppingListModel } from '@modules/shopping-list/database/shopping-list.model';
import { IngredientsModel } from '@modules/dish/database/ingredients.model';

@CommandHandler(ModifyShoppingListCommand)
export class ModifyShoppingListService implements ICommandHandler {
  constructor(private dataSource: DataSource) {}

  async execute({ listId, isBought, ingredientId }: ModifyShoppingListCommand) {
    const shoppingListRepository =
      this.dataSource.getRepository(ShoppingListModel);
    const ingredientRepository =
      this.dataSource.getRepository(IngredientsModel);

    const shoppingList = await shoppingListRepository.findOne({
      where: { id: listId },
    });

    if (!shoppingList) {
      throw new HttpException('Shopping list not found', HttpStatus.NOT_FOUND);
    }

    const ingredient = await ingredientRepository.findOne({
      where: { id: ingredientId },
    });

    if (!ingredient) {
      throw new HttpException('Ingredient not found', HttpStatus.NOT_FOUND);
    }

    shoppingList.generatedShoppingList = shoppingList.generatedShoppingList.map(
      (item) => {
        if (item.id === ingredientId) {
          item.isBought = isBought;
        }

        return item;
      },
    );

    await shoppingListRepository.save(shoppingList);
  }
}
