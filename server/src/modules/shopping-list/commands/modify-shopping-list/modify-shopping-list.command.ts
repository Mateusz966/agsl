import { Command, CommandProps } from '@libs/ddd';

export class ModifyShoppingListCommand extends Command {
  readonly listId: string;
  readonly ingredientId: string;
  readonly isBought: boolean;

  constructor(props: CommandProps<ModifyShoppingListCommand>) {
    super(props);
    this.ingredientId = props.ingredientId;
    this.listId = props.listId;
    this.isBought = props.isBought;
  }
}
