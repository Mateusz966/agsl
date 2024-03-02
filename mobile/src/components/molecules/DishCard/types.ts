import {DishResponse} from '../../../api/dish/types';

export interface DishCardProps {
  dish: DishResponse;
  onPressHandler: () => void;
}
