export const API_ROUTES = {
  v1: {
    register: '/v1/users',
    login: '/v1/auth/mobile/sign-in',
    addDish: '/v1/dishes',
  },
};

export const AXIOS_CONFIGURATION = {
  baseURL: 'http://10.0.2.2:3002',
  timeout: 10000,
};
