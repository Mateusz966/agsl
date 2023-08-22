import { Command, CommandProps } from '@libs/ddd';
import { IngredientsProps } from '@modules/dish/domain/value-objects/ingredients.value-object';

export class CreateDishCommand extends Command {
  readonly name: string;
  readonly photo?: Express.Multer.File;
  readonly ingredients: IngredientsProps[];
  readonly userId: string;

  constructor(props: CommandProps<CreateDishCommand>) {
    super(props);
    this.name = props.name;
    this.photo = props.photo;
    this.ingredients = props.ingredients;
    this.userId = props.userId;
  }
}
