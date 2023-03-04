import axios from 'axios';
import {AXIOS_CONFIGURATION} from './const';
import {RegisterRequest, SignInRequest, SignInResponse} from './types';

const httpClient = axios.create(AXIOS_CONFIGURATION);

export const signUpUser = async (user: RegisterRequest) => {
  const response = await httpClient.post('/users', user);
  return response.data;
};

export const loginUser = async (user: SignInRequest) => {
  const response = await httpClient.post<SignInResponse>(
    '/auth/mobile/sign-in',
    user,
  );
  return response.data;
};
