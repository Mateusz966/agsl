import { Mapper } from '@libs/ddd';

import { Injectable } from '@nestjs/common';
import { DishEntity } from '@modules/dish/domain/dish.entity';
import { DishEntityPersistent } from '@modules/dish/domain/dish.types';
import { DishModel } from '@modules/dish/database/dish.model';
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

  toDomain({ ingredients, dishPhoto, photoUrl, ...dishProps }: DishModel & { photoUrl?: string }): DishEntity {
    console.log('photoUrl', photoUrl)
    return new DishEntity({
      id: dishProps.id,
      createdAt: new Date(dishProps.createdAt),
      updatedAt: new Date(dishProps.updatedAt),
      props: {
        name: dishProps.name,
        photo: photoUrl,
        ingredients: new Ingredients(ingredients),
      },
    });
  }

  toDomainList(dishes: DishModel[]): DishEntity[] {
    return dishes.map(({ ingredients, dishPhoto, ...dishProps }) => {
      return new DishEntity({
        id: dishProps.id,
        createdAt: new Date(dishProps.createdAt),
        updatedAt: new Date(dishProps.updatedAt),
        props: {
          name: dishProps.name,
          photo: dishPhoto[0].id,
          ingredients: new Ingredients(ingredients),
        },
      });
    });
  }

  toResponseList(dishes: DishEntity[]): DishResponseDto[] {
    return dishes.map((dish) => {
      const props = dish.getPropsCopy();
      const res = new DishResponseDto(props);
      res.name = props.name;
      res.ingredients = props.ingredients.unpack();
      res.photo = props.photo;
      return res;
    });
  }

  toResponse(entity: DishEntity): DishResponseDto {
    const props = entity.getPropsCopy();
    const res = new DishResponseDto(props);

    res.name = props.name;
    res.ingredients = props.ingredients.unpack();
    res.photo = props.photo;
    return res;
  }

  /* ^ Data returned to the user is whitelisted to avoid leaks.
     If a new property is added, like password or a
     credit card number, it won't be returned
     unless you specifically allow this.
     (avoid blacklisting, which will return everything
      but blacklisted items, which can lead to a data leak).
  */
}
