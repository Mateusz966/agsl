import React, {useCallback} from 'react';
import {View} from 'react-native';
import Button from '../../molecules/Button';
import ControlledTextInput from '../../molecules/ControlledTextInput';
import {styles} from '../LoginComponent/styles';
import {ErrorMessage} from '../../atoms/ErrorMessage';
import useRegister from './useRegister';
import {UserRegister} from './validation';
import SnackbarMessage from '../../atoms/SnackbarMessage';

const RegisterComponent = () => {
  const {form, mutation, text, visible, setVisible} = useRegister();

  const {
    control,
    formState: {errors},
    handleSubmit,
  } = form;

  const onSubmit = (payload: UserRegister) => {
    mutation.mutate(payload);
  };

  const handleOnDissmiss = useCallback(
    () => setVisible(!visible),
    [setVisible, visible],
  );

  return (
    <View style={styles.container}>
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
      <Button onPress={handleSubmit(onSubmit)}>Sign up</Button>
      <SnackbarMessage
        visible={visible}
        text={text}
        onDismiss={handleOnDissmiss}
      />
    </View>
  );
};
export default RegisterComponent;
