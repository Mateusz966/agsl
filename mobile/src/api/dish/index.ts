import {httpClient} from '../client';
import {API_ROUTES} from '../const';

export const addDish = async (dish: FormData) => {
  const response = await httpClient.post(API_ROUTES.v1.dish.add, dish, {
    headers: {'Content-Type': 'multipart/form-data'},
    transformRequest: () => dish,
  });
  return response.data;
};
