import {useForm} from 'react-hook-form';
import {useMutation} from '@tanstack/react-query';
import {SignInRequest, SignInResponse} from '../../../api/user/types';
import {UserLogin, userLoginSchema} from './validation';
import {zodResolver} from '@hookform/resolvers/zod';
import {loginUser} from '../../../api/user';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useSnackbarContext} from '../../../common/contexts/SnackbarContext/useSnackbarContext';
import {RootStackParamList} from '../../../navigators/RootNavigation/types';
import {Scenes} from '../../../navigators/RootNavigation/const';
import {AxiosError} from 'axios';
import {getSnackbarErrorMessage} from '../../../common/contexts/SnackbarContext/helpers';
import {setGenericPassword} from 'react-native-keychain';

export const useLogin = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {setSnackbarState} = useSnackbarContext();

  const form = useForm<UserLogin>({
    resolver: zodResolver(userLoginSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const loginMutation = useMutation<SignInResponse, AxiosError, SignInRequest>({
    mutationFn: payload => {
      return loginUser(payload);
    },
    onSuccess: async ({accessToken, nick}) => {
      await setGenericPassword(nick, accessToken);
      setSnackbarState({visible: true, text: "You're logged in"});
      form.reset({email: '', password: ''});
      navigation.navigate(Scenes.Tab);
    },
    onError: error => {
      setSnackbarState({
        visible: false,
        text: `${getSnackbarErrorMessage(error?.status)}`,
      });
    },
  });

  const onSubmit = (payload: UserLogin) => {
    loginMutation.mutate(payload);
  };

  return {form, loginMutation, onSubmit};
};
