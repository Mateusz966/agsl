import {ShoppingListItem} from '../../../api/shopping-list/types';

export interface ShoppingListCardProps {
  createdAt: string;
  onPressHandler: () => void;
}
