import React from 'react';
import {Controller, FieldPath, FieldValues} from 'react-hook-form';
import {Checkbox} from 'react-native-paper';
import {View} from 'react-native';
import styles from '../styles';
import {ErrorMessage} from 'molecules';
import {ControlledCheckboxInputProps} from '.';

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
            status={value === 'true' ? 'checked' : 'unchecked'}
            onPress={() => {
              value === 'true' ? onChange('false') : onChange('true');
            }}
          />
        )}
      />
      <ErrorMessage error={error} errorStyle={errorStyle} />
    </View>
  );
};

export default ControlledCheckboxInput;
