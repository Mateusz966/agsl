import React from 'react';
import Button from '../../molecules/Button';
import ControlledTextInput from '../../molecules/ControlledTextInput';
import {ErrorMessage} from '../../atoms/ErrorMessage';
import useRegister from './useRegister';
import SnackbarMessage from '../../atoms/SnackbarMessage';
import {Layout} from '../../atoms/Layout';
import {useSnackbarVisibility} from '../../atoms/SnackbarMessage/useSnackbarVisibility';

const RegisterComponent = () => {
  const {form, mutation, text, visible, onSubmit} = useRegister();
  const {handleOnDissmiss} = useSnackbarVisibility();

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
      <SnackbarMessage
        visible={visible}
        text={text}
        onDismiss={handleOnDissmiss}
      />
    </Layout>
  );
};
export default RegisterComponent;
