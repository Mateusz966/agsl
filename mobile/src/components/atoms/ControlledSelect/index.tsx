import React from 'react';
import {Controller, FieldPath, FieldValues} from 'react-hook-form';
import Select from '../../molecules/Select';
import {ControlledSelectProps} from './types';

const ControlledSelect = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  control,
  rules,
  name,
  options,
  handlePress,
  expanded,
  title,
}: ControlledSelectProps<TFieldValues, TName>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, value}}) => (
        <Select
          onChange={onChange}
          options={options}
          value={value}
          handlePress={handlePress}
          expanded={expanded}
          title={title}
        />
      )}
    />
  );
};

export default ControlledSelect;
