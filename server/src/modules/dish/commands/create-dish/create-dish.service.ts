import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { CreateDishCommand } from '@modules/dish/commands/create-dish/create-dish.command';
import { DishEntity } from '@modules/dish/domain/dish.entity';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { FileService } from '@modules/file-uploader/file.service';
import { Ingredients } from '@modules/dish/domain/value-objects/ingredients.value-object';
import { DishMapper } from '@modules/dish/dish.mapper';
import { v4 } from 'uuid';
import { DataSource } from 'typeorm';
import { DishModel } from '@modules/dish/database/dish.model';
import { DishPhotoModel } from '@modules/dish/database/dish-photo.model';

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
      const fileKey = await this.fileService.uploadFile(
        command.photo,
        'dish-photo',
      );
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
    const { common, dish, ingredients } = this.mapper.toPersistence(dishEntity);
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      await queryRunner.manager
        .getRepository(DishModel)
        .save({ ...dish, ...common, user: { id: userId } });

      await queryRunner.manager.getRepository(DishPhotoModel).save({
        id: v4(),
        dish: { id: dish.id },
        user: { id: userId },
      });

      //FIXME: implement saving ingredients

      // await queryRunner.commitTransaction();
    } catch (e) {
      await queryRunner.rollbackTransaction();
      throw e;
    } finally {
      await queryRunner.release();
    }
  }
}
