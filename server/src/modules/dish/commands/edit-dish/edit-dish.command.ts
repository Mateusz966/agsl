import { Command, CommandProps } from '@libs/ddd';
import { IngredientsProps } from '@modules/dish/domain/value-objects/ingredients.value-object';

export class EditDishCommand extends Command {
  readonly id: string;
  readonly name: string;
  readonly photo?: Express.Multer.File | string | null;
  readonly ingredients: IngredientsProps[];
  readonly userId: string;

  constructor(props: CommandProps<EditDishCommand>) {
    super(props);
    this.id = props.id;
    this.name = props.name;
    this.photo = props.photo;
    this.ingredients = props.ingredients;
    this.userId = props.userId;
  }
}
