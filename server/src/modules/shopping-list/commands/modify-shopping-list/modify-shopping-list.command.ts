import { Command, CommandProps } from '@libs/ddd';
import { ModifyShoppingListRequestDto } from '@modules/shopping-list/dtos/modify-shopping-list.request.dto';

export class ModifyShoppingListCommand extends Command {
  readonly listId: string;
  readonly ingredients: ModifyShoppingListRequestDto['ingredients'];

  constructor(props: CommandProps<ModifyShoppingListCommand>) {
    super(props);
    this.ingredients = props.ingredients;
    this.listId = props.listId;
  }
}
