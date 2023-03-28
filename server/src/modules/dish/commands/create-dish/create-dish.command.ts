import { Command, CommandProps } from '@libs/ddd';
import { IngredientsProps } from '@modules/dish/domain/value-objects/ingredients.value-object';

export class CreateDishCommand extends Command {
  readonly name: string;
  readonly photo?: Buffer;
  readonly ingredients: IngredientsProps[]; // TODO TYPE

  constructor(props: CommandProps<CreateDishCommand>) {
    super(props);
    this.name = props.name;
    this.photo = props.photo;
    this.ingredients = props.ingredients;
  }
}
