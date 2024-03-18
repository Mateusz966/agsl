import React, {memo} from 'react';
import {Button} from 'atoms';
import {ControlledTextInput} from 'molecules';
import {useLogin} from '.';

const LoginForm = () => {
  const {form, loginMutation, onSubmit} = useLogin();

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
    </>
  );
};

export default memo(LoginForm);
