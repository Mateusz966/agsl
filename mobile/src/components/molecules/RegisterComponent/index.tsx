import React from 'react';
import {View} from 'react-native';
import Button from '../../atoms/Button';
import {useForm} from 'react-hook-form';

import ControlledTextInput from '../ControlledTextInput';
import {regex} from '../const';

const RegisterComponent = () => {
  const {handleSubmit, control} = useForm();
  const onSubmit = data => console.log(data);

  return (
    <View>
      <ControlledTextInput control={control} name="nick" />
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
export default RegisterComponent;
