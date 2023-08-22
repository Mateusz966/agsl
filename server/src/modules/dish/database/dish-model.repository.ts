import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DishModel } from '@modules/dish/database/dish.model';
import { DishMapper } from '@modules/dish/dish.mapper';

/**
 *  Repository is used for retrieving/saving domain entities
 * */

export class DishModelRepository extends Repository<DishModel> {
  constructor(
    @InjectRepository(DishModel)
    private dishRepository: Repository<DishModel>,
    private mapper: DishMapper,
  ) {
    super(
      dishRepository.target,
      dishRepository.manager,
      dishRepository.queryRunner,
    );
  }
}
