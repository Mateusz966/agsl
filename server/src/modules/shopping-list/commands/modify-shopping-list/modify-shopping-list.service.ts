import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DataSource } from 'typeorm';
import { ModifyShoppingListCommand } from '@modules/shopping-list/commands/modify-shopping-list/modify-shopping-list.command';
import { HttpException, HttpStatus } from '@nestjs/common';
import { ShoppingListModel } from '@modules/shopping-list/database/shopping-list.model';

@CommandHandler(ModifyShoppingListCommand)
export class ModifyShoppingListService implements ICommandHandler {
  constructor(private dataSource: DataSource) {}

  async execute({ listId, ingredients }: ModifyShoppingListCommand) {
    const shoppingListRepository =
      this.dataSource.getRepository(ShoppingListModel);

    const shoppingList = await shoppingListRepository.findOne({
      where: { id: listId },
    });

    if (!shoppingList) {
      throw new HttpException('Shopping list not found', HttpStatus.NOT_FOUND);
    }

    shoppingList.generatedShoppingList = shoppingList.generatedShoppingList.map(
      (item) => {
        const foundIngredient = ingredients.find(
          (ingredient) => ingredient.ingredientId === item.id,
        );
        if (foundIngredient) {
          item.isBought = foundIngredient.isBought;
        }

        return item;
      },
    );

    await shoppingListRepository.save(shoppingList);
  }
}
