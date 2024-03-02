import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DataSource } from 'typeorm';
import { ModifyShoppingListCommand } from '@modules/shopping-list/commands/modify-shopping-list/modify-shopping-list.command';
import { HttpException, HttpStatus } from '@nestjs/common';

@CommandHandler(ModifyShoppingListCommand)
export class ModifyShoppingListService implements ICommandHandler {
  constructor(private dataSource: DataSource) {}

  async execute({ listId, isBought, ingredientId }: ModifyShoppingListCommand) {
    const listElementIndex =
      (
        await this.dataSource.createQueryRunner().query(`
        SELECT idx
        FROM shopping_list,
            jsonb_array_elements(shopping_list."generatedShoppingList") WITH ORDINALITY arr(obj, idx)
        WHERE obj->>'id' = '${ingredientId}'
        LIMIT 1;
      `)
      )?.[0]?.idx - 1;

    if (listElementIndex === -1) {
      throw new HttpException(
        'Incorrect ingredient id',
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.dataSource.createQueryRunner().query(`
      UPDATE shopping_list
      SET "generatedShoppingList" = jsonb_set(
          "generatedShoppingList",
          '{${listElementIndex}}',
          "generatedShoppingList"->${listElementIndex} || '{"isBought": "${isBought}"}'::jsonb
      )
      WHERE id = '${listId}';`);
  }
}
