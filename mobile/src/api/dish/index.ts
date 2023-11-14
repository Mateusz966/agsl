import {httpClient} from '../client';
import {API_ROUTES} from '../const';
import {EditDishRequest} from './types';

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

export const editDish = async (editRequest: EditDishRequest) => {
  console.log(editRequest);
  const response = await httpClient.patch(
    `${API_ROUTES.v1.dish}/${editRequest.id}`,
    editRequest.dish,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      transformRequest: () => editRequest.dish,
    },
  );
  console.log(response, 'res');
  return response.data;
};
