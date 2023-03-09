import React, {useCallback} from 'react';
import {View} from 'react-native';
import Button from '../../molecules/Button';
import ErrorMessage from '../../atoms/ErrorMessage';
import ControlledTextInput from '../../molecules/ControlledTextInput';
import {styles} from './styles';
import {useLogin} from './useLogin';
import {UserLogin} from './validation';
import SnackbarMessage from '../../atoms/SnackbarMessage';

const LoginComponent = () => {
  const {form, mutation, text, visible, setVisible} = useLogin();
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = form;

  const onSubmit = (payload: UserLogin) => {
    mutation.mutate(payload);
  };

  const handleOnDissmiss = useCallback(
    () => setVisible(!visible),
    [setVisible, visible],
  );

  return (
    <View style={styles.container}>
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
      <Button onPress={handleSubmit(onSubmit)}>Sign in</Button>
      <SnackbarMessage
        visible={visible}
        text={text}
        onDismiss={handleOnDissmiss}
      />
    </View>
  );
};

export default LoginComponent;
