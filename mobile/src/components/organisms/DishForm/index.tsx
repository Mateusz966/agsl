import React, {useCallback} from 'react';
import Button from '../../molecules/Button';
import ErrorMessage from '../../atoms/ErrorMessage';
import ControlledTextInput from '../../molecules/ControlledTextInput';
import {useLogin} from './useLogin';
import SnackbarMessage from '../../atoms/SnackbarMessage';
import {Layout} from '../../atoms/Layout';
import {useSnackbarVisibility} from '../../atoms/SnackbarMessage/useSnackbarVisibility';
import {useCamera} from './useCamera';

const DishForm = () => {
  const {handleLaunchCamera} = useCamera();
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
      <Button onPress={handleLaunchCamera}>Sign in</Button>
    </Layout>
  );
};

export default DishForm;
