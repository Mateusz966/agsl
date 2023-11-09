import { DishMapper } from '@modules/dish/dish.mapper';
import { DishModelRepository } from '@modules/dish/database/dish-model.repository';
import { HttpException, HttpStatus } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetUserDishesQuery } from '@modules/dish/queries/get-user-dishes/get-user-dishes.query';

@QueryHandler(GetUserDishesQuery)
export class GetUserDishesQueryHandler implements IQueryHandler {
  constructor(
    private readonly dishRepo: DishModelRepository,
    private readonly dishMapper: DishMapper,
  ) {}

  async execute({ userId }: GetUserDishesQuery): Promise<any> {
    const res = await this.dishRepo.find({
      where: { user: { id: userId } },
    });

    if (!res) {
      throw new HttpException('dish not found', HttpStatus.NOT_FOUND);
    }

    return this.dishMapper.toDomainList(res);
  }
}
