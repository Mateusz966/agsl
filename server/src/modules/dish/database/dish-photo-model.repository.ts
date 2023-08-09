import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DishMapper } from '@modules/dish/dish.mapper';
import { DishPhotoModel } from '@modules/dish/database/dish-photo.model';

/**
 *  Repository is used for retrieving/saving domain entities
 * */

export class DishPhotoModelRepository extends Repository<DishPhotoModel> {
  constructor(
    @InjectRepository(DishPhotoModel)
    private dishPhotoRepository: Repository<DishPhotoModel>,
    private mapper: DishMapper,
  ) {
    super(
      dishPhotoRepository.target,
      dishPhotoRepository.manager,
      dishPhotoRepository.queryRunner,
    );
  }
}
