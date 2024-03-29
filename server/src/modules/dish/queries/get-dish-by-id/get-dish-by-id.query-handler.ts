import { GetDishByIdQuery } from '@modules/dish/queries/get-dish-by-id/get-dish-by-id.query';
import { DishMapper } from '@modules/dish/dish.mapper';
import { DishModelRepository } from '@modules/dish/database/dish-model.repository';
import { HttpException, HttpStatus } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FileService } from '@modules/file-handler/file.service';
import { DishEntity } from '@modules/dish/domain/dish.entity';

@QueryHandler(GetDishByIdQuery)
export class GetDishByIdQueryHandler implements IQueryHandler {
  constructor(
    private readonly dishRepo: DishModelRepository,
    private readonly dishMapper: DishMapper,
    private readonly fileService: FileService,
  ) {}

  async execute({ id }: GetDishByIdQuery): Promise<DishEntity> {
    const res = await this.dishRepo.findOneBy({ id });
    let photo: string | undefined;

    if (res?.dishPhoto.length) {
      photo = await this.fileService.getPrivateFile(res.dishPhoto[0].id);
    }

    if (!res) {
      throw new HttpException('dish not found', HttpStatus.NOT_FOUND);
    }

    return this.dishMapper.toDomain({ ...res, photo });
  }
}
