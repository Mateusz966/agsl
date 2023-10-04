import React, {memo} from 'react';
import Button from '../../atoms/Button';
import ControlledTextInput from '../../molecules/ControlledInputs/ControlledTextInput';
import {ErrorMessage} from '../../molecules/ErrorMessage';
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
      <ErrorMessage error={errors.nick?.message} />
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
        Sign up
      </Button>
      <SnackbarMessage visible={visible} onDismiss={handleOnDissmiss}>
        {text}
      </SnackbarMessage>
    </Layout>
  );
};
export default memo(RegisterForm);
