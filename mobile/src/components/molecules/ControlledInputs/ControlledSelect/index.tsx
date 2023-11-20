import React from 'react';
import {Controller, FieldPath, FieldValues} from 'react-hook-form';
import {ControlledSelectProps} from './types';
import Select from '../../../atoms/Select';
import {View} from 'react-native';
import ErrorMessage from '../../ErrorMessage';
import styles from '../styles';

const ControlledSelect = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  control,
  rules,
  name,
  options,
  title,
  error,
  style,
}: ControlledSelectProps<TFieldValues, TName>) => {
  return (
    <View style={[styles.controlledInputContainer, style]}>
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
      <ErrorMessage error={error} />
    </View>
  );
};

export default ControlledSelect;
