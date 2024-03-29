import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { CreateDishCommand } from '@modules/dish/commands/create-dish/create-dish.command';
import { DishEntity } from '@modules/dish/domain/dish.entity';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { FileService } from '@modules/file-handler/file.service';
import { Ingredients } from '@modules/dish/domain/value-objects/ingredients.value-object';
import { DishMapper } from '@modules/dish/dish.mapper';
import { v4 } from 'uuid';
import { DataSource } from 'typeorm';
import { DishModel } from '@modules/dish/database/dish.model';
import { DishPhotoModel } from '@modules/dish/database/dish-photo.model';
import { IngredientsModel } from '@modules/dish/database/ingredients.model';

@CommandHandler(CreateDishCommand)
export class CreateDishService implements ICommandHandler {
  constructor(
    private readonly eventEmitter: EventEmitter2,
    private readonly fileService: FileService,
    private readonly mapper: DishMapper,
    private dataSource: DataSource,
  ) {}

  async execute(command: CreateDishCommand): Promise<any> {
    try {
      let fileKey: string | undefined;

      if (command?.photo) {
        fileKey = await this.fileService.uploadFile(
          command.photo,
          'dish-photo',
        );
      }
      const dish = DishEntity.create({
        ingredients: new Ingredients(command.ingredients),
        name: command.name,
        photo: fileKey,
      });

      await this.saveDish(dish, command.userId);
      await dish.publishEvents(this.eventEmitter);
    } catch (error) {
      throw error;
    }
  }

  private async saveDish(dishEntity: DishEntity, userId: string) {
    const { dish, ingredients, dishPhoto } =
      this.mapper.toPersistence(dishEntity);
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      await queryRunner.manager
        .getRepository(DishModel)
        .save({ ...dish, user: { id: userId } });

      if (dishPhoto) {
        await queryRunner.manager.getRepository(DishPhotoModel).save({
          id: v4(),
          dish: { id: dish.id },
          user: { id: userId },
        });
      }

      await Promise.all(
        ingredients.unpack().map(async (ingredient) => {
          await queryRunner.manager.getRepository(IngredientsModel).save({
            id: v4(),
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
