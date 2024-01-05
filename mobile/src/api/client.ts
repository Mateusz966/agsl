import axios, {AxiosError, AxiosResponse} from 'axios';
import {API_ROUTES, AXIOS_CONFIGURATION} from './const';
import {getGenericPassword, resetGenericPassword} from 'react-native-keychain';
import {navigate} from '../navigators/RootNavigation/helpers';
import {Scenes} from '../navigators/RootNavigation/const';

export const httpClient = axios.create(AXIOS_CONFIGURATION);

httpClient.interceptors.request.use(
  async config => {
    if (config.url === API_ROUTES.v1.register) {
      config.headers.Authorization = undefined;
    } else {
      if (!config.headers.Authorization) {
        const credentials = await getGenericPassword();
        if (credentials && credentials.password) {
          config.headers.Authorization = `Bearer ${credentials.password}`;
        }
      }
    }
    return config;
  },
  async (error: AxiosError) => {
    return Promise.reject(error);
  },
);

httpClient.interceptors.response.use(
  async (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    console.log(error);
    if (error.response?.status === 401) {
      await resetGenericPassword();
      navigate(Scenes.Entry);
    }
  },
);
