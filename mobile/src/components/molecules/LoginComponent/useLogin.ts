import {useForm} from 'react-hook-form';
import {useMutation} from 'react-query';
import {loginUser} from '../../../api/client';
import {SignInRequest, SignInResponse} from '../../../api/types';
import {UserLogin, userLoginSchema} from './validation';
import {zodResolver} from '@hookform/resolvers/zod';
import {useState} from 'react';

export const useLogin = () => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');
  const form = useForm<UserLogin>({
    resolver: zodResolver(userLoginSchema),
  });

  const mutation = useMutation<SignInResponse, void, SignInRequest>({
    mutationFn: payload => {
      return loginUser(payload);
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

  return {form, mutation, visible, text, setVisible};
};
