export type SignInRequest = {
  email: string;
  password: string;
};

export type SignInResponse = {
  id: string;
  email: string;
  accessToken: string;
  nick: string;
};

export type RegisterRequest = {
  nick: string;
  email: string;
  password: string;
};
