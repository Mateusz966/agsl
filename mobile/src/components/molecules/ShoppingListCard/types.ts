import {ShoppingListItem} from '../../../api/shopping-list/types';

export interface ShoppingListCardProps {
  ingredients: ShoppingListItem[];
  onPressHandler: () => void;
}
