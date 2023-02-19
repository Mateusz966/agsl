export type SignInRequest = {
  email: string;
  password: string;
}

export type SignInResponse = {
  email: string;
  accessToken: string;
}
