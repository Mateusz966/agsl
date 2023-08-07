import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { CreateDishCommand } from '@modules/dish/commands/create-dish/create-dish.command';
import { DishEntity } from '@modules/dish/domain/dish.entity';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { FileService } from '@modules/file-uploader/file.service';
import { Ingredients } from '@modules/dish/domain/value-objects/ingredients.value-object';
import { DishModelRepository } from '@modules/dish/database/dish-model.repository';
import { DishMapper } from '@modules/dish/dish.mapper';
import { DishEntityPersistent } from '@modules/dish/domain/dish.types';

@CommandHandler(CreateDishCommand)
export class CreateDishService implements ICommandHandler {
  constructor(
    private readonly eventEmitter: EventEmitter2,
    private readonly fileService: FileService,
    private readonly dishRepo: DishModelRepository,
    private readonly mapper: DishMapper,
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

    await this.dishRepo.save({ ...dish, ...common, user: { id: userId } });
  }
}
