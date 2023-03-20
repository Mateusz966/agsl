import { DomainEvent, DomainEventProps } from '@libs/ddd';
import { IngredientsProps } from '@modules/dish/domain/value-objects/ingredients.value-object';

export class DishCreatedDomainEvent extends DomainEvent {
  readonly name: string;
  readonly ingredients: IngredientsProps[];
  readonly photo?: string;

  constructor(props: DomainEventProps<DishCreatedDomainEvent>) {
    super(props);
    this.name = props.name;
    this.photo = props.photo;
    this.ingredients = props.ingredients;
  }
}
