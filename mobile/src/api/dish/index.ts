import {httpClient} from '../client';
import {API_ROUTES} from '../const';
import {DishRequest} from './types';

export const addDish = async (dish: FormData) => {
  const response = await httpClient.post(API_ROUTES.v1.addDish, dish, {
    headers: {'Content-Type': 'multipart/form-data'},
  });
  return response.data;
};
