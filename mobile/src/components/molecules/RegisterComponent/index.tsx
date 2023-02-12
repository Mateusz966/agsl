import React, {memo} from 'react';
import {View} from 'react-native';
import Button from '../../atoms/Button';
import TextInput from '../../atoms/TextInput';
import {useForm} from 'react-hook-form';
import {Text} from 'react-native-paper';
import client from '../../../api/client';
import ControlledTextInput from '../ControlledTextInput';

const RegisterComponent = () => {
  const {handleSubmit, control} = useForm();
  const onSubmit = data => console.log(data);

  return (
    <View>
      <ControlledTextInput control={control} name="nick" />

      <ControlledTextInput control={control} name="email" />

      <ControlledTextInput control={control} name="password" />

      <Button onPress={handleSubmit(onSubmit)}>Login in</Button>
    </View>
  );
};
export default RegisterComponent;
