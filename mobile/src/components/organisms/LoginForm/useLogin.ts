import {useForm} from 'react-hook-form';
import {useMutation} from '@tanstack/react-query';
import {SignInRequest, SignInResponse} from '../../../api/user/types';
import {UserLogin, userLoginSchema} from './validation';
import {zodResolver} from '@hookform/resolvers/zod';
import {loginUser} from '../../../api/user';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Scenes} from '../../../navigators/const';
import {useSnackbarContext} from '../../../common/contexts/SnackbarContext/useSnackbarContext';
import Keychain from 'react-native-keychain';
import {RootStackParamList} from '../../../navigators/types';
import {useAuthContext} from '../../../common/contexts/AuthContext/useAuthContext';

export const useLogin = () => {
  const {setIsLogged} = useAuthContext();
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

  const loginMutation = useMutation<SignInResponse, void, SignInRequest>({
    mutationFn: payload => {
      return loginUser(payload);
    },
    onSuccess: async ({accessToken, email}) => {
      await Keychain.setGenericPassword(email, accessToken);
      setIsLogged(true);
      setSnackbarState({visible: true, text: "You're logged in"});
      form.reset({email: '', password: ''});
      navigation.navigate(Scenes.DishList);
    },
    onError: error => {
      setSnackbarState({visible: false, text: `${error}`});
    },
  });

  const onSubmit = (payload: UserLogin) => {
    loginMutation.mutate(payload);
  };

  return {form, loginMutation, onSubmit};
};
