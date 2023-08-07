import { Mapper } from '@libs/ddd';

import { Injectable } from '@nestjs/common';
import { DishEntity } from '@modules/dish/domain/dish.entity';
import { DishEntityPersistent } from '@modules/dish/domain/dish.types';
import { DishModel } from '@modules/dish/database/dish.model';
import { DishPhotoModel } from '@modules/dish/database/dish-photo.model';
import { IngredientsModel } from '@modules/dish/database/ingredients.model';
import { Ingredients } from '@modules/dish/domain/value-objects/ingredients.value-object';
import { DishResponseDto } from '@modules/dish/dtos/dish.response.dto';

/**
 * Mapper constructs objects that are used in different layers:
 * Record is an object that is stored in a database,
 * Entity is an object that is used in application domain layer,
 * and a ResponseDTO is an object returned to a user (usually as json).
 */

@Injectable()
export class DishMapper
  implements Mapper<DishEntity, DishEntityPersistent, DishResponseDto>
{
  toPersistence(entity: DishEntity): DishEntityPersistent {
    const copy = entity.getPropsCopy();
    console.log(copy)
    return {
      common: {
        createdAt: copy.createdAt,
        updatedAt: copy.updatedAt,
      },
      dish: {
        id: copy.id,
        name: copy.name,
      },
      ingredients: copy.ingredients,
      dishPhoto: copy.photo,
    };
  }

  toDomain({
    dishRecord,
    dishPhotoRecord,
    ingredientsRecord,
  }: {
    dishRecord: DishModel;
    dishPhotoRecord: DishPhotoModel;
    ingredientsRecord: IngredientsModel[];
  }): DishEntity {
    return new DishEntity({
      id: dishRecord.id,
      createdAt: new Date(dishRecord.createdAt),
      updatedAt: new Date(dishRecord.updatedAt),
      props: {
        name: dishRecord.name,
        photo: dishPhotoRecord.name,
        ingredients: new Ingredients(ingredientsRecord),
      },
    });
  }

  toResponse(entity: DishEntity): DishResponseDto {
    const props = entity.getPropsCopy();
    return new DishResponseDto(props);
  }

  /* ^ Data returned to the user is whitelisted to avoid leaks.
     If a new property is added, like password or a
     credit card number, it won't be returned
     unless you specifically allow this.
     (avoid blacklisting, which will return everything
      but blacklisted items, which can lead to a data leak).
  */
}
