import {useForm} from 'react-hook-form';
import {useMutation} from '@tanstack/react-query';
import {setGenericPassword} from 'react-native-keychain';
import {zodResolver} from '@hookform/resolvers/zod';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AxiosError} from 'axios';
import {loginUser, SignInRequest, SignInResponse} from 'api/user';
import {useSnackbarContext} from '../../../common/contexts/SnackbarContext/useSnackbarContext';
import {RootScenes, RootStackParamList} from 'navigators/RootNavigation';
import {getSnackbarErrorMessage} from '../../../common/contexts/SnackbarContext/SnackbarContext.helpers';
import {useAuthContext} from '../../../common/contexts/AuthContext/useAuthContext';
import {userLoginSchema} from './loginFormValidation';
import {UserLogin} from '.';

const useLogin = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {setSnackbarState} = useSnackbarContext();
  const {setAuthData} = useAuthContext();

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
      setAuthData({isLogged: true, nickName: nick});
      setSnackbarState({visible: true, text: "You're logged in"});
      form.reset({email: '', password: ''});
      navigation.navigate(RootScenes.Tab);
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

export default useLogin;
