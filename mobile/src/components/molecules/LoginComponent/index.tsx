import React from 'react';
import {View} from 'react-native';
import Button from '../../atoms/Button';
import {useForm} from 'react-hook-form';
import ControlledTextInput from '../ControlledTextInput';
import {regex} from '../const';

const LoginComponent = () => {
  const {handleSubmit, control} = useForm({mode: 'onChange'});
  const onSubmit = e => {
    return console.log(e);
  };
  return (
    <View>
      <ControlledTextInput
        control={control}
        rules={{pattern: regex, required: true}}
        name="email"
      />
      <ControlledTextInput
        control={control}
        rules={{required: true}}
        isPassword
        name="password"
      />
      <Button onPress={handleSubmit(onSubmit)}>Login in</Button>
    </View>
  );
};

export default LoginComponent;
