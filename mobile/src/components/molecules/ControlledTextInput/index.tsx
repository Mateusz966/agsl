import React from 'react';
import {useController} from 'react-hook-form';

import TextInput from '../../atoms/TextInput';
import {ControlledTextInputProps} from './types';

const ControlledTextInput = ({
  isPassword = false,
  control,
  name,
  error,
  ...props
}: ControlledTextInputProps<T>) => {
  const {
    field: {onChange, onBlur, value},
  } = useController({
    name,
    control,
    defaultValue: '',
  });
  return (
    <TextInput
      name={name}
      error={!!error}
      secureTextEntry={isPassword}
      control={control}
      onChangeText={onChange}
      onBlur={onBlur}
      value={value}
      label={name}
      placeholder={name}
      {...props}
    />
  );
};

export default ControlledTextInput;
