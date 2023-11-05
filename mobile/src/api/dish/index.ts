import {httpClient} from '../client';
import {API_ROUTES} from '../const';
import * as Keychain from 'react-native-keychain';

export const addDish = async (dish: FormData) => {
  const response = await httpClient.post(API_ROUTES.v1.dish.add, dish, {
    headers: {'Content-Type': 'multipart/form-data'},
    transformRequest: () => dish,
  });
  return response.data;
};

export const getDishList = async () => {
  const userData = await Keychain.getGenericPassword();
  const id = userData ? userData.username : '';
  const response = await httpClient.get(`${API_ROUTES.v1.addDish}${id}`);
  return response.data;
};
