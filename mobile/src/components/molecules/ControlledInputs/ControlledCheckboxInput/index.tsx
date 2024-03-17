import React from 'react';
import {Controller, FieldPath, FieldValues} from 'react-hook-form';
import {Checkbox} from 'react-native-paper';
import ErrorMessage from '../../ErrorMessage';
import {View} from 'react-native';
import styles from '../styles';
import {ControlledCheckboxInputProps} from './types';

const ControlledCheckboxInput = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  control,
  rules,
  name,
  error,
  errorStyle,
  style,
}: ControlledCheckboxInputProps<TFieldValues, TName>) => {
  return (
    <View style={[styles.controlledInputContainer, style]}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {onChange, value}}) => (
          <Checkbox
            status={value ? 'checked' : 'unchecked'}
            onPress={() => {
              onChange(!value);
            }}
          />
        )}
      />
      <ErrorMessage error={error} errorStyle={errorStyle} />
    </View>
  );
};

export default ControlledCheckboxInput;
