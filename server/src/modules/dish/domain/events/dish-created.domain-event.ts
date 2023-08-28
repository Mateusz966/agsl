import { DomainEvent, DomainEventProps } from '@libs/ddd';
import { IngredientsProps } from '@modules/dish/domain/value-objects/ingredients.value-object';
import { DishPhoto } from '@modules/dish/domain/dish.types';

export class DishCreatedDomainEvent extends DomainEvent {
  readonly name: string;
  readonly ingredients: IngredientsProps[];
  readonly photo: DishPhoto;

  constructor(props: DomainEventProps<DishCreatedDomainEvent>) {
    super(props);
    this.name = props.name;
    this.photo = props.photo;
    this.ingredients = props.ingredients;
  }
}
