export const API_ROUTES = {
  v1: {
    register: '/v1/users',
    login: '/v1/auth/mobile/sign-in',
    dish: '/v1/dishes',
    shoppingList: '/v1/shopping-list',
  },
};

export const AXIOS_CONFIGURATION = {
  baseURL: 'http://10.0.2.2:3002',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};
