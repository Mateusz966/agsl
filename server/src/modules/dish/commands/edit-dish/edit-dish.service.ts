import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DishEntity } from '@modules/dish/domain/dish.entity';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { FileService } from '@modules/file-uploader/file.service';
import { Ingredients } from '@modules/dish/domain/value-objects/ingredients.value-object';
import { DishMapper } from '@modules/dish/dish.mapper';
import { v4 } from 'uuid';
import { DataSource } from 'typeorm';
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

  async execute(command: EditDishCommand): Promise<any> {
    try {
      let fileKey: string | undefined;

      if (command?.photo) {
        console.log('dupa');
        fileKey = await this.fileService.uploadFile(
          command.photo,
          'dish-photo',
        );
      }

      console.log('filekey', fileKey);
      console.log('command?.photo', command?.photo);

      const dish = DishEntity.update({
        id: command.id,
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
    const photoKey = dishEntity.getPropsCopy().photo;
    console.log('log: photokey', photoKey);
    const { common, dish, ingredients } = this.mapper.toPersistence(dishEntity);
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      await queryRunner.manager
        .getRepository(DishModel)
        .upsert({ ...dish, ...common, user: { id: userId } }, ['id']);

      if (photoKey === null) {
        await queryRunner.manager
          .getRepository(DishPhotoModel)
          .delete({ dish: { id: dish.id }, user: { id: userId } });
      } else if (photoKey === undefined) {
        await queryRunner.manager.getRepository(DishPhotoModel).upsert(
          {
            id: v4(),
            dish: { id: dish.id },
            user: { id: userId },
          },
          ['id'],
        );
      }

      await Promise.all(
        ingredients.unpack().map(async (ingredient) => {
          console.log('ingredient', ingredient);
          await queryRunner.manager.getRepository(IngredientsModel).upsert(
            {
              id: ingredient?.id ?? v4(),
              dish: { id: dish.id },
              name: ingredient.name,
              amount: ingredient.amount,
              unit: ingredient.unit,
            },
            ['id'],
          );
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
