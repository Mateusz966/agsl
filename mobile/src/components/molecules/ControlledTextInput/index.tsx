import React from 'react';
import {useController} from 'react-hook-form';

import TextInput from '../../atoms/TextInput';
import {ControlledTextInputProps} from './types';

const ControlledTextInput = ({
  isPassword = false,
  rules,
  control,
  name,
  ...props
}: ControlledTextInputProps<T>) => {
  const {
    field: {onChange, onBlur, value},
  } = useController({
    name,
    control,
    defaultValue: '',
    rules,
  });
  return (
    <TextInput
      name={name}
      secureTextEntry={isPassword}
      rules={rules}
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
