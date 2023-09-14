import React from 'react';
import {Controller, FieldPath, FieldValues} from 'react-hook-form';

import TextInput from '../../atoms/TextInput';
import {ControlledTextInputProps} from './types';

const ControlledPhotoInput = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  control,
  rules,
  name,
  displayName,
}: ControlledTextInputProps<TFieldValues, TName>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({field: {onChange, onBlur, value}}) => (
        <input type="file" onBlur={onBlur} onChange={onChange} value={value} />
      )}
    />
  );
};

export default ControlledPhotoInput;
