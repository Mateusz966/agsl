import React, {useState} from 'react';
import {useWindowDimensions, View} from 'react-native';
import Button from '../../atoms/Button';
import ControlledTextInput from '../ControlledTextInput';
import {styles} from '../styles';
import {ErrorMessage} from '../../atoms/ErrorMessage';
import useRegister from './useRegister';
import {Snackbar} from 'react-native-paper';
import {UserRegister} from './validation';

const RegisterComponent = () => {
  const {form, mutation, text, visible, setVisible} = useRegister();

  const watchAllFields = form.watch();
  const [currentNick, setCurrentNick] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');

  const isInputChanged =
    currentEmail !== watchAllFields.email ||
    currentPassword !== watchAllFields.password ||
    currentNick !== watchAllFields.nick;

  const {
    control,
    formState: {errors},
    handleSubmit,
  } = form;
  const onSubmit = (payload: UserRegister) => {
    mutation.mutate(payload);
    setCurrentEmail(payload.email);
    setCurrentPassword(payload.password);
    setCurrentNick(payload.nick);
    if (mutation.isSuccess) {
      form.reset();
    }
  };

  const layout = useWindowDimensions();

  return (
    <View style={styles.container}>
      {mutation.isError && isInputChanged && (
        <ErrorMessage error={'User already exist'} />
      )}
      <ControlledTextInput
        error={errors.nick?.message ? true : false}
        control={control}
        name="nick"
      />
      <ErrorMessage error={errors.nick?.message} />
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
        style={[styles.button, {width: layout.width - 80}]}
        onPress={handleSubmit(onSubmit)}>
        Sign up
      </Button>
      <Snackbar
        visible={visible}
        duration={3000}
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
export default RegisterComponent;
