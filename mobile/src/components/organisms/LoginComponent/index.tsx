import React from 'react';
import Button from '../../molecules/Button';
import ErrorMessage from '../../atoms/ErrorMessage';
import ControlledTextInput from '../../molecules/ControlledTextInput';
import {useLogin} from './useLogin';
import SnackbarMessage from '../../atoms/SnackbarMessage';
import {Layout} from '../../atoms/Layout';

const LoginComponent = () => {
  const {form, mutation, text, onSubmit, visible, handleOnDissmiss} =
    useLogin();

  const {
    handleSubmit,
    control,
    formState: {errors},
  } = form;

  return (
    <Layout>
      <ControlledTextInput
        error={errors.email?.message}
        control={control}
        name="email"
      />
      <ErrorMessage error={errors.email?.message} />
      <ControlledTextInput
        error={errors.password?.message}
        control={control}
        isPassword
        name="password"
      />
      <ErrorMessage error={errors.password?.message} />
      <Button loading={mutation.isLoading} onPress={handleSubmit(onSubmit)}>
        Sign in
      </Button>
      <SnackbarMessage visible={visible} onDismiss={handleOnDissmiss}>
        {text}
      </SnackbarMessage>
    </Layout>
  );
};

export default LoginComponent;
