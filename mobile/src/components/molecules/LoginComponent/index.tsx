import React from 'react';
import {useWindowDimensions, View} from 'react-native';
import Button from '../../atoms/Button';
import ErrorMessage from '../../atoms/ErrorMessage';
import ControlledTextInput from '../ControlledTextInput';
import {styles} from '../styles';
import {useLogin} from './useLogin';
import {Snackbar} from 'react-native-paper';
import {UserLogin} from './validation';

const LoginComponent = () => {
  const layout = useWindowDimensions();
  const {form, mutation, text, visible, setVisible} = useLogin();

  const {
    handleSubmit,
    control,
    formState: {errors},
  } = form;
  const onSubmit = (payload: UserLogin) => {
    mutation.mutate(payload);
  };

  return (
    <View style={styles.container}>
      <ControlledTextInput
        error={errors.email?.message ? true : false}
        control={control}
        name="email"
      />
      <ErrorMessage error={errors.email?.message} />
      <ControlledTextInput
        error={errors.password?.message ? true : false}
        control={control}
        isPassword
        name="password"
      />
      <ErrorMessage error={errors.password?.message} />
      <Button
        style={[styles.button, {width: layout.width - 70}]}
        onPress={handleSubmit(onSubmit)}>
        Sign in
      </Button>
      <Snackbar
        duration={3000}
        visible={visible}
        onDismiss={() => {
          setVisible(!visible);
        }}
        action={{
          label: 'Undo',
          onPress: () => {
            setVisible(!visible);
          },
        }}>
        {text}
      </Snackbar>
    </View>
  );
};

export default LoginComponent;
