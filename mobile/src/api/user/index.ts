import {httpClient} from '../client';
import {API_ROUTES} from '../const';
import {RegisterRequest, SignInRequest, SignInResponse} from './types';

export const signUpUser = async (user: RegisterRequest) => {
  const response = await httpClient.post(API_ROUTES.v1.register, user);
  return response.data;
};

export const loginUser = async (user: SignInRequest) => {
  const response = await httpClient.post<SignInResponse>(
    API_ROUTES.v1.register,
    user,
  );
  return response.data;
};
