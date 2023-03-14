import React from 'react';
import {Controller, FieldPath, FieldValues} from 'react-hook-form';

import TextInput from '../../atoms/TextInput';
import {ControlledTextInputProps} from './types';

const ControlledTextInput = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  isPassword = false,
  control,
  name,
  error,
  placeholder,
}: ControlledTextInputProps<TFieldValues, TName>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({field: {onChange, onBlur, value}}) => (
        <TextInput
          error={!!error}
          secureTextEntry={isPassword}
          label={name}
          placeholder={placeholder}
          onChangeText={onChange}
          onBlur={onBlur}
          value={value}
        />
      )}
    />
  );
};

export default ControlledTextInput;
