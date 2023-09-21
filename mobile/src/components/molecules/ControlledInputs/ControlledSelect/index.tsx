import React from 'react';
import {Controller, FieldPath, FieldValues} from 'react-hook-form';
import {ControlledSelectProps} from './types';
import Select from '../../../atoms/Select';

const ControlledSelect = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  control,
  rules,
  name,
  options,
  title,
}: ControlledSelectProps<TFieldValues, TName>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, value}}) => (
        <Select
          title={title}
          value={value}
          onChange={onChange}
          options={options}
        />
      )}
    />
  );
};

export default ControlledSelect;
