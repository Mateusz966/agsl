import axios from 'axios';
import {API_ROUTES, AXIOS_CONFIGURATION} from './const';
import {RegisterRequest, SignInRequest, SignInResponse} from './types';

const httpClient = axios.create(AXIOS_CONFIGURATION);

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
