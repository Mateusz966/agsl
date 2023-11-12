import {useForm} from 'react-hook-form';
import {useMutation} from '@tanstack/react-query';
import {SignInRequest, SignInResponse} from '../../../api/user/types';
import {UserLogin, userLoginSchema} from './validation';
import {zodResolver} from '@hookform/resolvers/zod';
import {ERROR_MESSAGES} from '../../../utils/errorDictionary';
import {loginUser} from '../../../api/user';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import {Scenes} from '../../../navigators/DefaultNavigation/const';
import {HomeNavigationProps} from '../../../navigators/DefaultNavigation/types';
import {useSnackbarContext} from '../../atoms/SnackbarMessage/useSnackbarContext';

export const useLogin = () => {
  const navigation = useNavigation<HomeNavigationProps>();
  const {setVisible, setText} = useSnackbarContext();

  const form = useForm<UserLogin>({
    resolver: zodResolver(userLoginSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const loginMutation = useMutation<SignInResponse, void, SignInRequest>({
    mutationFn: payload => {
      return loginUser(payload);
    },
    onSuccess: () => {
      setVisible(true);
      setText("You're logged in");
      form.reset({email: '', password: ''});
      navigation.navigate(Scenes.Home);
    },
    onError: error => {
      setVisible(true);
      setText(`${ERROR_MESSAGES[`${error}`]}`);
    },
  });

  const onSubmit = (payload: UserLogin) => {
    loginMutation.mutate(payload);
  };

  return {form, loginMutation, onSubmit};
};
