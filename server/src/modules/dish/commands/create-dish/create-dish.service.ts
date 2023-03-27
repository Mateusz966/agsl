import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { CreateDishCommand } from '@modules/dish/commands/create-dish/create-dish.command';
import { DishEntity } from '@modules/dish/domain/dish.entity';
import { EventEmitter2 } from '@nestjs/event-emitter';

@CommandHandler(CreateDishCommand)
export class CreateDishService implements ICommandHandler {
  constructor(
    private readonly eventEmitter: EventEmitter2,
  ) {}

  async execute(command: CreateDishCommand): Promise<any> {
    const dish = DishEntity.create({
      ingredients: command.ingredients as any,
      name: command.name,
      photo: command.photo,
    });
    await dish.publishEvents(this.eventEmitter);

    try {
      return dish;
    } catch (error) {
      throw error;
    }
  }
}
