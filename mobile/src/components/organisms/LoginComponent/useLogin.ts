import {useForm} from 'react-hook-form';
import {useMutation} from '@tanstack/react-query';
import {SignInRequest, SignInResponse} from '../../../api/user/types';
import {UserLogin, userLoginSchema} from './validation';
import {zodResolver} from '@hookform/resolvers/zod';
import {useState} from 'react';
import {ERROR_MESSAGES} from '../../../utils/errorDictionary';
import {loginUser} from '../../../api/user';
import {useSnackbarVisibility} from '../../atoms/SnackbarMessage/useSnackbarVisibility';
import {useNavigation} from '@react-navigation/native';
import {Scenes} from '../../../navigators/const';
import {AddDishNavigationProps} from '../../../navigators/types';

export const useLogin = () => {
  const navigation = useNavigation<AddDishNavigationProps>();
  const {visible, setVisible, handleOnDissmiss} = useSnackbarVisibility();
  const [text, setText] = useState('');

  const form = useForm<UserLogin>({
    resolver: zodResolver(userLoginSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const mutation = useMutation<SignInResponse, void, SignInRequest>({
    mutationFn: payload => {
      return loginUser(payload);
    },
    onSuccess: () => {
      setVisible(true);
      setText("You're logged in");
      form.reset({email: '', password: ''});
      navigation.navigate(Scenes.AddDish);
    },
    onError: error => {
      setVisible(true);
      setText(`${ERROR_MESSAGES[`${error}`]}`);
    },
  });

  const onSubmit = (payload: UserLogin) => {
    mutation.mutate(payload);
  };

  return {form, mutation, text, onSubmit, visible, handleOnDissmiss};
};
