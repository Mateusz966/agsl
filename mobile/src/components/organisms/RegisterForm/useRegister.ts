import {useForm} from 'react-hook-form';
import {useMutation} from '@tanstack/react-query';
import {RegisterRequest} from '../../../api/user/types';
import {UserRegister, userRegisterSchema} from './validation';
import {zodResolver} from '@hookform/resolvers/zod';
import {signUpUser} from '../../../api/user';
import {useNavigation} from '@react-navigation/core';
import {Scenes} from '../../../navigators/RootNavigation/const';
import {useSnackbarContext} from '../../../common/contexts/SnackbarContext/useSnackbarContext';
import {RootStackParamList} from '../../../navigators/RootNavigation/types';
import {NavigationProp} from '@react-navigation/native';
import {AxiosError} from 'axios';
import {getSnackbarErrorMessage} from '../../../common/contexts/SnackbarContext/helpers';

const useRegister = () => {
  const form = useForm<UserRegister>({
    resolver: zodResolver(userRegisterSchema),
  });
  const {setSnackbarState} = useSnackbarContext();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const registerMutation = useMutation<void, AxiosError, RegisterRequest>({
    mutationFn: payload => {
      return signUpUser(payload);
    },
    onSuccess: () => {
      setSnackbarState({visible: true, text: "You're registered"});
      form.reset({nick: '', email: '', password: ''});
      navigation.navigate(Scenes.Login);
    },
    onError: error => {
      setSnackbarState({
        visible: true,
        text: `${getSnackbarErrorMessage(error?.status)}`,
      });
    },
  });

  const onSubmit = (payload: UserRegister) => {
    registerMutation.mutate(payload);
  };

  return {form, registerMutation, onSubmit};
};

export default useRegister;
