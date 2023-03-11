export interface Dictionary<T> {
  [Key: string]: T;
}

export const ERROR_MESSAGES: Dictionary<string> = {
  'AxiosError: Request failed with status code 401':
    'Your token is no longer valid',
  'AxiosError: Request failed with status code 404':
    'Invalid email or password',
  'AxiosError: Request failed with status code 500': 'User already exist',
};