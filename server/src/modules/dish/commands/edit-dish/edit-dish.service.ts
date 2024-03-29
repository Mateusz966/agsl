import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DishEntity } from '@modules/dish/domain/dish.entity';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { FileService } from '@modules/file-handler/file.service';
import { Ingredients } from '@modules/dish/domain/value-objects/ingredients.value-object';
import { DishMapper } from '@modules/dish/dish.mapper';
import { v4 } from 'uuid';
import { DataSource, In } from 'typeorm';
import { DishModel } from '@modules/dish/database/dish.model';
import { DishPhotoModel } from '@modules/dish/database/dish-photo.model';
import { IngredientsModel } from '@modules/dish/database/ingredients.model';
import { EditDishCommand } from '@modules/dish/commands/edit-dish/edit-dish.command';

@CommandHandler(EditDishCommand)
export class EditDishService implements ICommandHandler {
  constructor(
    private readonly eventEmitter: EventEmitter2,
    private readonly fileService: FileService,
    private readonly mapper: DishMapper,
    private dataSource: DataSource,
  ) {}

  async execute(command: EditDishCommand) {
    try {
      let fileKey: string | undefined;

      if (command?.photo) {
        fileKey = await this.fileService.uploadFile(
          command.photo,
          'dish-photo',
        );
      }

      const dish = DishEntity.update({
        id: command.id,
        ingredients: new Ingredients(command.ingredients),
        name: command.name,
        photo: command?.photo === null ? null : fileKey,
      });

      await this.updateDish(
        dish,
        command.userId,
        command?.ingredientsIdsToDelete,
      );
      await dish.publishEvents(this.eventEmitter);
    } catch (error) {
      throw error;
    }
  }
  private async updateDish(
    dishEntity: DishEntity,
    userId: string,
    ingredientsIdsToDelete?: string[],
  ) {
    const photoKey = dishEntity.getPropsCopy().photo;

    const { dish, ingredients } = this.mapper.toPersistence(dishEntity);
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const deleteCriteria = { dish: { id: dish.id }, user: { id: userId } };

      await queryRunner.manager
        .getRepository(DishModel)
        .save({ ...dish, user: { id: userId } });

      if (photoKey === null) {
        await queryRunner.manager
          .getRepository(DishPhotoModel)
          .delete(deleteCriteria);
      } else if (photoKey) {
        await queryRunner.manager
          .getRepository(DishPhotoModel)
          .delete(deleteCriteria);
        await queryRunner.manager.getRepository(DishPhotoModel).insert({
          id: photoKey,
          dish: { id: dish.id },
          user: { id: userId },
        });
      }

      await queryRunner.manager
        .getRepository(IngredientsModel)
        .delete({ id: In(ingredientsIdsToDelete) });

      await Promise.all(
        ingredients.unpack().map(async (ingredient) => {
          await queryRunner.manager.getRepository(IngredientsModel).save({
            id: ingredient?.id ?? v4(),
            dish: { id: dish.id },
            name: ingredient.name,
            amount: ingredient.amount,
            unit: ingredient.unit,
          });
        }),
      );

      await queryRunner.commitTransaction();
    } catch (e) {
      await queryRunner.rollbackTransaction();
      throw e;
    } finally {
      await queryRunner.release();
    }
  }
}
