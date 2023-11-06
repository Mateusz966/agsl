import {Unit} from '../../../../api/dish/types';

export const DEFAULT_DISH_FORM_VALUE = {
  name: '',
  ingredients: [
    {
      name: '',
      amount: '1',
      unit: Unit.g,
    },
  ],
};
