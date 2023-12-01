import { DishMapper } from '@modules/dish/dish.mapper';
import { DishModelRepository } from '@modules/dish/database/dish-model.repository';
import { HttpException, HttpStatus } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetUserDishesQuery } from '@modules/dish/queries/get-user-dishes/get-user-dishes.query';
import { FileService } from '@modules/file-handler/file.service';
import { DishEntity } from '@modules/dish/domain/dish.entity';

@QueryHandler(GetUserDishesQuery)
export class GetUserDishesQueryHandler implements IQueryHandler {
  constructor(
    private readonly dishRepo: DishModelRepository,
    private readonly dishMapper: DishMapper,
    private readonly fileService: FileService,
  ) {}

  async execute({ userId }: GetUserDishesQuery): Promise<DishEntity[]> {
    const dishes = await this.dishRepo.find({
      where: { user: { id: userId } },
    });

    const dishesWithPresignedUrl = await Promise.all(
      dishes.map(async (dish) => {
        if (dish?.dishPhoto.length) {
          const photo = await this.fileService.getPrivateFile(
            dish.dishPhoto[0].id,
          );
          return {
            ...dish,
            photo,
          };
        }
        return dish;
      }),
    );

    if (!dishes?.length) {
      throw new HttpException('dishes not found', HttpStatus.NOT_FOUND);
    }

    return this.dishMapper.toDomainList(dishesWithPresignedUrl);
  }
}
