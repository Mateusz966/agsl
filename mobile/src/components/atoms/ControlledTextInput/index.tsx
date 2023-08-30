import React from 'react';
import {Controller, FieldPath, FieldValues} from 'react-hook-form';

import TextInput from '../TextInput';
import {ControlledTextInputProps} from './types';

const ControlledTextInput = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  isPassword = false,
  control,
  rules,
  name,
  error,
  placeholder,
  displayName,
}: ControlledTextInputProps<TFieldValues, TName>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, onBlur, value}}) => (
        <TextInput
          error={!!error}
          secureTextEntry={isPassword}
          label={displayName || name}
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
