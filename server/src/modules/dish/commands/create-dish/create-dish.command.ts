import { Command, CommandProps } from '@libs/ddd';

export class CreateDishCommand extends Command {
  readonly name: string;
  readonly photo?: FormData;
  readonly ingredients: any[]; // TODO TYPE

  constructor(props: CommandProps<CreateDishCommand>) {
    super(props);
    this.name = props.name;
    this.photo = props.photo;
    this.ingredients = props.ingredients;
  }
}
