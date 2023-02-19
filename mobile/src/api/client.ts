import axios from 'axios';
import {RegisterRequest, SignInRequest, SignInResponse} from './types';
const baseUrl = 'http://10.0.2.2:3000/v1';

export const authApi = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  withCredentials: true,
});

export const signUpUser = async (user: RegisterRequest) => {
  const response = await authApi.post('/users', user);
  return response.data;
};

export const loginUser = async (user: SignInRequest) => {
  const response = await authApi.post<SignInResponse>(
    '/auth/mobile/sign-in',
    user,
  );
  return response.data;
};
