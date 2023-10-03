import {Control} from 'react-hook-form';
import {Unit} from '../../../api/dish/types';
import {AddDish} from '../DishForm/validation';

export const DISH_UNITS = [
  {label: Unit.g, value: 'g'},
  {label: Unit.ml, value: 'ml'},
  {label: Unit.kg, value: 'kg'},
  {label: Unit.l, value: 'l'},
];

export interface IngredientsFieldsArrayProps {
  control: Control<AddDish>;
}
