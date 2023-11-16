import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DishMapper } from '@modules/dish/dish.mapper';
import { IngredientsModel } from '@modules/dish/database/ingredients.model';

/**
 *  Repository is used for retrieving/saving domain entities
 * */

export class IngredientsModelRepository extends Repository<IngredientsModel> {
  constructor(
    @InjectRepository(IngredientsModel)
    private dishPhotoRepository: Repository<IngredientsModel>,
    private mapper: DishMapper,
  ) {
    super(
      dishPhotoRepository.target,
      dishPhotoRepository.manager,
      dishPhotoRepository.queryRunner,
    );
  }
}
