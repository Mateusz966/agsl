import {UseFormReturn} from 'react-hook-form';
import {Unit} from '../../../api/dish/types';
import {AddDish} from '../DishForm/validation';

export const DISH_UNITS = [
  {label: Unit.g, value: Unit.g},
  {label: Unit.ml, value: Unit.ml},
  {label: Unit.kg, value: Unit.kg},
  {label: Unit.l, value: Unit.l},
];

export interface IngredientsFieldsArrayProps {
  form: UseFormReturn<AddDish>;
}
