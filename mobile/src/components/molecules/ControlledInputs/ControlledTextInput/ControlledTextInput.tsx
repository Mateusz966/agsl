import React from 'react';
import {Controller, FieldPath, FieldValues} from 'react-hook-form';
import {View} from 'react-native';
import {ErrorMessage} from 'molecules';
import styles from '../styles';
import {TextInput} from 'atoms';
import {ControlledTextInputProps} from '.';

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
  keyboardType,
  errorStyle,
  style,
}: ControlledTextInputProps<TFieldValues, TName>) => {
  return (
    <View style={[styles.controlledInputContainer, style]}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            error={!!error}
            secureTextEntry={isPassword}
            label={displayName ?? name}
            placeholder={placeholder}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value?.toString()}
            keyboardType={keyboardType}
            mode="outlined"
          />
        )}
      />
      <ErrorMessage error={error} errorStyle={errorStyle} />
    </View>
  );
};

export default ControlledTextInput;
