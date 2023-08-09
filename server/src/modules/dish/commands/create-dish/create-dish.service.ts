import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { CreateDishCommand } from '@modules/dish/commands/create-dish/create-dish.command';
import { DishEntity } from '@modules/dish/domain/dish.entity';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { FileService } from '@modules/file-uploader/file.service';
import { Ingredients } from '@modules/dish/domain/value-objects/ingredients.value-object';
import { DishModelRepository } from '@modules/dish/database/dish-model.repository';
import { DishMapper } from '@modules/dish/dish.mapper';
import { DishEntityPersistent } from '@modules/dish/domain/dish.types';
import { DataSource } from 'typeorm';
import { DishPhotoModelRepository } from '@modules/dish/database/dish-photo-model.repository';

@CommandHandler(CreateDishCommand)
export class CreateDishService implements ICommandHandler {
  constructor(
    private readonly eventEmitter: EventEmitter2,
    private readonly fileService: FileService,
    private readonly dishRepo: DishModelRepository,
    private readonly dishPhotoRepo: DishPhotoModelRepository,
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
    const { common, dish } = this.mapper.toPersistence(dishEntity);
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      await this.dishRepo.save({ ...dish, ...common, user: { id: userId } });
      await this.dishPhotoRepo.save({ ...dish, user: { id: userId } });
    } catch (e) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
}
