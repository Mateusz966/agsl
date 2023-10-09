import {httpClient} from '../client';
import {API_ROUTES} from '../const';
import {DishRequest} from './types';

export const addDish = async (dish: DishRequest) => {
  const {ingredients, name, photo} = dish;
  const response = await httpClient.post(API_ROUTES.v1.addDish, {
    ingredients: JSON.stringify(ingredients),
    name,
    photo,
  });
  return response.data;
};
