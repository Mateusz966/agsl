import React, {memo} from 'react';
import Button from '../../atoms/Button';
import ControlledTextInput from '../../molecules/ControlledInputs/ControlledTextInput';
import useRegister from './useRegister';
import SnackbarMessage from '../../atoms/SnackbarMessage';
import {Layout} from '../../atoms/Layout';

const RegisterForm = () => {
  const {form, mutation, text, onSubmit, visible, handleOnDissmiss} =
    useRegister();

  const {
    control,
    formState: {errors},
    handleSubmit,
  } = form;

  return (
    <Layout>
      <ControlledTextInput
        error={errors.nick?.message}
        control={control}
        name="nick"
      />
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
        Sign up
      </Button>
      <SnackbarMessage visible={visible} onDismiss={handleOnDissmiss}>
        {text}
      </SnackbarMessage>
    </Layout>
  );
};
export default memo(RegisterForm);
