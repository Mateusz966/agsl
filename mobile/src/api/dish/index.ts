import {httpClient} from '../client';
import {API_ROUTES} from '../const';
import {DishRequest} from './types';

export const addDish = async (dish: DishRequest) => {
    const response = await httpClient.post(API_ROUTES.v1.addDish, dish);
    return response.data;
};
