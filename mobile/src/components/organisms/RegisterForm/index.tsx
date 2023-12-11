import React, {memo} from 'react';
import Button from '../../atoms/Buttons/TextButton';
import ControlledTextInput from '../../molecules/ControlledInputs/ControlledTextInput';
import useRegister from './useRegister';

const RegisterForm = () => {
  const {form, onSubmit, registerMutation} = useRegister();

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
    </>
  );
};
export default memo(RegisterForm);
