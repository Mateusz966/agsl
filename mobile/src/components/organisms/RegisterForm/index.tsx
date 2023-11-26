import React, {memo} from 'react';
import Button from '../../atoms/Buttons/TextButton';
import ControlledTextInput from '../../molecules/ControlledInputs/ControlledTextInput';
import useRegister from './useRegister';
import SnackbarMessage from '../../atoms/SnackbarMessage';
import {useSnackbarContext} from '../../../common/contexts/SnackbarContext/useSnackbarContext';

const RegisterForm = () => {
  const {form, onSubmit, registerMutation} = useRegister();
  const {text, visible, handleOnDismiss} = useSnackbarContext();

  const {
    control,
    formState: {errors},
    handleSubmit,
  } = form;

  return (
    <>
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
      <Button
        loading={registerMutation.isLoading}
        onPress={handleSubmit(onSubmit)}>
        Sign up
      </Button>
      <SnackbarMessage visible={visible} onDismiss={handleOnDismiss}>
        {text}
      </SnackbarMessage>
    </>
  );
};
export default memo(RegisterForm);
