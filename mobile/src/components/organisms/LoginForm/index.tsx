import React, {memo} from 'react';
import Button from '../../atoms/Buttons/TextButton';
import ControlledTextInput from '../../molecules/ControlledInputs/ControlledTextInput';
import {useLogin} from './useLogin';
import SnackbarMessage from '../../atoms/SnackbarMessage';
import {Layout} from '../../atoms/Layout';

const LoginForm = () => {
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
      <ControlledTextInput
        error={errors.password?.message}
        control={control}
        isPassword
        name="password"
      />
      <Button loading={mutation.isLoading} onPress={handleSubmit(onSubmit)}>
        Sign in
      </Button>
      <SnackbarMessage visible={visible} onDismiss={handleOnDissmiss}>
        {text}
      </SnackbarMessage>
    </Layout>
  );
};

export default memo(LoginForm);
