import {useForm} from 'react-hook-form';
import {useMutation} from '@tanstack/react-query';
import {RegisterRequest} from '../../../api/user/types';
import {UserRegister, userRegisterSchema} from './validation';
import {zodResolver} from '@hookform/resolvers/zod';
import {ERROR_MESSAGES} from '../../../utils/errorDictionary';
import {signUpUser} from '../../../api/user';
import {useNavigation} from '@react-navigation/core';
import {AddDishNavigationProps} from '../../../navigators/types';
import {Scenes} from '../../../navigators/const';
import {useSnackbarContext} from '../../../common/contexts/SnackbarContext/useSnackbarContext';

const useRegister = () => {
  const form = useForm<UserRegister>({
    resolver: zodResolver(userRegisterSchema),
  });
  const {setVisible, setText} = useSnackbarContext();
  const navigation = useNavigation<AddDishNavigationProps>();

  const registerMutation = useMutation<void, void, RegisterRequest>({
    mutationFn: payload => {
      return signUpUser(payload);
    },
    onSuccess: () => {
      setVisible(true);
      setText("You're registered");
      form.reset({nick: '', email: '', password: ''});
      setVisible(false);
      navigation.navigate(Scenes.Login);
    },
    onError: error => {
      setVisible(true);
      setText(`${ERROR_MESSAGES[`${error}`]}`);
    },
  });

  const onSubmit = (payload: UserRegister) => {
    registerMutation.mutate(payload);
  };

  return {form, registerMutation, onSubmit};
};

export default useRegister;
