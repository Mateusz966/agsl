import React from 'react';
import {useWindowDimensions, View} from 'react-native';
import Button from '../../atoms/Button';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import ControlledTextInput from '../ControlledTextInput';
import {regex} from '../const';
import {styles} from '../styles';
import client from '../../../api/client';
import {UserRegister, userRegisterSchema} from './validation';
import {ErrorMessage} from '../../atoms/ErrorMessage';

const RegisterComponent = () => {
  const {
    handleSubmit,
    control,
    getValues,
    formState: {errors},
  } = useForm<UserRegister>({
    resolver: zodResolver(userRegisterSchema),
  });
  const values = getValues();
  const onSubmit = () => {
    console.log(values);
    client
      .post('/v1/users', {
        nick: values.nick,
        email: values.email,
        password: values.password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const layout = useWindowDimensions();

  return (
    <View style={styles.container}>
      <ControlledTextInput control={control} name="nick" />
      <ErrorMessage error={errors.nick?.message} />
      <ControlledTextInput
        control={control}
        rules={{pattern: regex, required: true}}
        name="email"
      />
      <ErrorMessage error={errors.email?.message} />
      <ControlledTextInput
        control={control}
        rules={{required: true}}
        isPassword
        name="password"
      />
      <ErrorMessage error={errors.password?.message} />
      <Button
        style={[styles.button, {width: layout.width - 80}]}
        onPress={handleSubmit(onSubmit)}>
        Sign up
      </Button>
    </View>
  );
};
export default RegisterComponent;
