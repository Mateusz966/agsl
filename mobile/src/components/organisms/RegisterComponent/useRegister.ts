import {useForm} from 'react-hook-form';
import {useMutation} from '@tanstack/react-query';
import {RegisterRequest} from '../../../api/user/types';
import {UserRegister, userRegisterSchema} from './validation';
import {zodResolver} from '@hookform/resolvers/zod';
import {useState} from 'react';
import {ERROR_MESSAGES} from '../../../utils/errorDictionary';
import {signUpUser} from '../../../api/user';
import {useVisible} from '../../atoms/SnackbarMessage/useVisible';

const useRegister = () => {
  const form = useForm<UserRegister>({
    resolver: zodResolver(userRegisterSchema),
  });
  const {visible, setVisible} = useVisible();
  const [text, setText] = useState('');

  const mutation = useMutation<void, void, RegisterRequest>({
    mutationFn: payload => {
      return signUpUser(payload);
    },
    onSuccess: () => {
      setVisible(true);
      setText("You're registered");
      form.reset();
    },
    onError: error => {
      setVisible(true);
      setText(`${ERROR_MESSAGES[`${error}`]}`);
    },
  });

  const onSubmit = (payload: UserRegister) => {
    mutation.mutate(payload);
  };

  return {form, mutation, text, visible, onSubmit};
};

export default useRegister;
