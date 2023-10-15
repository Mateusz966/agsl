import axios from 'axios';
import {API_ROUTES, AXIOS_CONFIGURATION} from './const';
import * as Keychain from 'react-native-keychain';

export const httpClient = axios.create(AXIOS_CONFIGURATION);

httpClient.interceptors.request.use(
  async config => {
    if (config.url === API_ROUTES.v1.register) {
      config.headers.Authorization = undefined;
    } else {
      if (!config.headers.Authorization) {
        const credentials = await Keychain.getGenericPassword();
        if (credentials && credentials.password) {
          config.headers.Authorization = `Bearer ${credentials.password}`;
        }
      }
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
