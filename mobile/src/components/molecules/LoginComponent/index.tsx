import React, {memo} from 'react';
import {useWindowDimensions, View} from 'react-native';
import Button from '../../atoms/Button';
import {useForm} from 'react-hook-form';
import ControlledTextInput from '../ControlledTextInput';
import {regex} from '../const';
import {styles} from '../styles';

const LoginComponent = () => {
  const {handleSubmit, control} = useForm({mode: 'onChange'});
  const layout = useWindowDimensions();

  const onSubmit = e => {
    return console.log(e);
  };
  return (
    <View style={styles.container}>
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
        style={[styles.button, {width: layout.width - 70}]}
        onPress={handleSubmit(onSubmit)}>
        Sign in
      </Button>
    </View>
  );
};

export default LoginComponent;
