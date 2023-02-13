import React, {memo} from 'react';
import {useWindowDimensions, View} from 'react-native';
import Button from '../../atoms/Button';
import {SubmitHandler, useForm} from 'react-hook-form';

import ControlledTextInput from '../ControlledTextInput';
import {regex} from '../const';
import {styles} from '../styles';
import client from '../../../api/client';

const RegisterComponent = () => {
  const {handleSubmit, control, getValues} = useForm();
  const values = getValues();
  const onSubmit = () => {
    console.log(values);
    client
      .post('/v1/users', {
        nick: values.nick,
        email: values.email,
        password: values.password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const layout = useWindowDimensions();

  return (
    <View style={styles.container}>
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
      <Button
        style={[styles.button, {width: layout.width - 80}]}
        onPress={handleSubmit(onSubmit)}>
        Sign up
      </Button>
    </View>
  );
};
export default RegisterComponent;
