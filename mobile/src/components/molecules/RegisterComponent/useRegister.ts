import {useForm} from 'react-hook-form';
import {useMutation} from 'react-query';
import {signUpUser} from '../../../api/client';
import {RegisterRequest} from '../../../api/types';
import {UserRegister, userRegisterSchema} from './validation';
import {zodResolver} from '@hookform/resolvers/zod';
import {useState} from 'react';

const useRegister = () => {
  const form = useForm<UserRegister>({
    resolver: zodResolver(userRegisterSchema),
  });
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');

  const mutation = useMutation<void, void, RegisterRequest>({
    mutationFn: payload => {
      return signUpUser(payload);
    },
    onSuccess: () => {
      setVisible(true);
      setText("You're registered");
    },
    onError: error => {
      setVisible(true);
      setText(`${error}: error message`);
    },
  });

  return {form, mutation, text, visible, setVisible};
};

export default useRegister;
