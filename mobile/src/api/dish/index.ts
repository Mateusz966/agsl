import {httpClient} from '../client';
import {API_ROUTES} from '../const';

export const addDish = async (dish: FormData) => {
  const response = await httpClient.post(API_ROUTES.v1.dish, dish, {
    headers: {'Content-Type': 'multipart/form-data'},
    transformRequest: () => dish,
  });
  return response.data;
};

export const getDishList = async () => {
  const response = await httpClient.get(`${API_ROUTES.v1.dish}`);
  return response.data;
};

export const editDish = async (id: string, dish: FormData) => {
  const response = await httpClient.patch(`${API_ROUTES.v1.dish}/${id}`, dish, {
    headers: {'Content-Type': 'multipart/form-data'},
    transformRequest: () => dish,
  });
  return response.data;
};
