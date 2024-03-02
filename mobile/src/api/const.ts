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

export enum ErrorCode {
  InvalidToken = 401,
  NotFound = 404,
  UserExists = 409,
  ServerError = 500,
}

export const ERROR_MESSAGES: Partial<Record<ErrorCode, {}>> = {
  [ErrorCode.InvalidToken]: 'Your token is no longer valid',
  [ErrorCode.NotFound]: {
    auth: 'Invalid email or password',
    dish: 'Dish not found',
    shoppingList: 'Shopping list not found',
  },
  [ErrorCode.UserExists]: 'User already exist',
  [ErrorCode.ServerError]: 'Unknown error',
};
