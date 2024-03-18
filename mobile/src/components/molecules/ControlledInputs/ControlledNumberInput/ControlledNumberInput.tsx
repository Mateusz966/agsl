import React from 'react';
import {Controller, FieldPath, FieldValues} from 'react-hook-form';
import {View} from 'react-native';
import {ErrorMessage} from 'molecules';
import styles from '../styles';
import {TextInput} from 'atoms';
import {ControlledNumberInputProps} from '.';

const ControlledNumberInput = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  control,
  rules,
  name,
  error,
  placeholder,
  displayName,
  errorStyle,
  style,
}: ControlledNumberInputProps<TFieldValues, TName>) => {
  return (
    <View style={[styles.controlledInputContainer, style]}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            error={!!error}
            label={displayName ?? name}
            placeholder={placeholder}
            onChangeText={text => {
              const numericValue = parseInt(text, 10);
              onChange(numericValue);
            }}
            onBlur={onBlur}
            value={value?.toString()}
            keyboardType={'numeric'}
            mode="outlined"
          />
        )}
      />
      <ErrorMessage error={error} errorStyle={errorStyle} />
    </View>
  );
};

export default ControlledNumberInput;
