import {useForm} from 'react-hook-form';
import {useMutation} from '@tanstack/react-query';
import {SignInRequest, SignInResponse} from '../../../api/user/types';
import {UserLogin, userLoginSchema} from './validation';
import {zodResolver} from '@hookform/resolvers/zod';
import {ERROR_MESSAGES} from '../../../utils/errorDictionary';
import {loginUser} from '../../../api/user';
import {useNavigation} from '@react-navigation/native';
import {Scenes} from '../../../navigators/const';
import {AddDishNavigationProps} from '../../../navigators/types';
import {useSnackbarContext} from '../../atoms/SnackbarMessage/useSnackbarContext';
import Keychain from "react-native-keychain";

export const useLogin = () => {
  const navigation = useNavigation<AddDishNavigationProps>();
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
    onSuccess: async ({accessToken, email}) => {
      await Keychain.setGenericPassword(email, accessToken);
      setVisible(true);
      setText("You're logged in");
      form.reset({email: '', password: ''});
      navigation.navigate(Scenes.DishList);
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
