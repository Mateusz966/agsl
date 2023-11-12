import {SceneToRenderType} from '../../molecules/Tabs/types';
import LoginForm from '../../organisms/LoginForm';
import RegisterForm from '../../organisms/RegisterForm';

export const LOGIN_AND_REGISTER_ROUTES = [
  {key: 'login', title: 'Sign in'},
  {key: 'register', title: 'Sign up'},
];

export const LOGIN_AND_REGISTER_SCENES: SceneToRenderType = {
  login: LoginForm,
  register: RegisterForm,
};
