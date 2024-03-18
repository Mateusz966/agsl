import {httpClient} from '../client';
import {API_ROUTES} from '../const';
import {RegisterRequest, SignInRequest, SignInResponse} from './types';

const signUpUser = async (user: RegisterRequest) => {
  const response = await httpClient.post(API_ROUTES.v1.register, user);

  return response.data;
};

const loginUser = async (user: SignInRequest) => {
  const response = await httpClient.post<SignInResponse>(
    API_ROUTES.v1.login,
    user,
  );

  return response.data;
};

export {loginUser, signUpUser};
export type {RegisterRequest, SignInRequest, SignInResponse};
