import { GetDishByIdQuery } from '@modules/dish/queries/get-dish-by-id/get-dish-by-id.query';
import { DishMapper } from '@modules/dish/dish.mapper';
import { DishModelRepository } from '@modules/dish/database/dish-model.repository';
import { HttpException, HttpStatus } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { DishPhotoModelRepository } from '@modules/dish/database/dish-photo-model.repository';

@QueryHandler(GetDishByIdQuery)
export class GetDishByIdQueryHandler implements IQueryHandler {
  constructor(
    private readonly dishRepo: DishModelRepository,
    private readonly dishPhotoRepo: DishPhotoModelRepository,
    private readonly dishMapper: DishMapper,
  ) {}

  async execute({ id }: GetDishByIdQuery): Promise<any> {
    const res = await this.dishRepo.findOneBy({ id });

    if (!res) {
      throw new HttpException('dish not found', HttpStatus.NOT_FOUND);
    }

    return this.dishMapper.toDomain(res);
  }
}
