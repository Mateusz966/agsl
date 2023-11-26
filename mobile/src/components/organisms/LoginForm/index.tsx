import React, {memo} from 'react';
import Button from '../../atoms/Buttons/TextButton';
import ControlledTextInput from '../../molecules/ControlledInputs/ControlledTextInput';
import {useLogin} from './useLogin';
import SnackbarMessage from '../../atoms/SnackbarMessage';
import {useSnackbarContext} from '../../../common/contexts/SnackbarContext/useSnackbarContext';

const LoginForm = () => {
  const {form, loginMutation, onSubmit} = useLogin();
  const {visible, text, handleOnDismiss} = useSnackbarContext();

  const {
    handleSubmit,
    control,
    formState: {errors},
  } = form;

  return (
    <>
      <ControlledTextInput
        error={errors.email?.message}
        control={control}
        name="email"
        displayName="E-mail"
        placeholder="example@email.com"
      />
      <ControlledTextInput
        error={errors.password?.message}
        control={control}
        isPassword
        name="password"
        displayName="Password"
        placeholder="********"
      />
      <Button
        loading={loginMutation.isLoading}
        onPress={handleSubmit(onSubmit)}>
        Sign in
      </Button>
      <SnackbarMessage visible={visible} onDismiss={handleOnDismiss}>
        {text}
      </SnackbarMessage>
    </>
  );
};

export default memo(LoginForm);
