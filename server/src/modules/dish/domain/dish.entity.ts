import { AggregateRoot, AggregateID } from '@libs/ddd';
import { v4 } from 'uuid';
import {
  CreateDishProps,
  DishProps,
  UpdateDishProps,
} from '@modules/dish/domain/dish.types';
import { DishCreatedDomainEvent } from '@modules/dish/domain/events/dish-created.domain-event';
import { DishUpdatedDomainEvent } from '@modules/dish/domain/events/dish-updated.domain-event';

export class DishEntity extends AggregateRoot<DishProps> {
  protected readonly _id: AggregateID;

  static create(create: CreateDishProps): DishEntity {
    const id = v4();
    const props: CreateDishProps = create;

    const dish = new DishEntity({ id, props });

    dish.addEvent(
      new DishCreatedDomainEvent({
        aggregateId: id,
        name: props.name,
        photo: props.photo ?? null,
        ingredients: props.ingredients.unpack(),
      }),
    );
    return dish;
  }

  static update(update: UpdateDishProps): DishEntity {
    const { id, ...props } = update;

    const dish = new DishEntity({ id, props });
    dish.addEvent(
      new DishUpdatedDomainEvent({
        aggregateId: id,
        name: props.name,
        photo: props.photo,
        ingredients: props.ingredients.unpack(),
      }),
    );
    return dish;
  }

  validate(): void {
    // entity business rules validation to protect it's invariant before saving entity to a database
  }
}
