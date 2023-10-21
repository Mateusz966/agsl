import React from 'react';
import {Controller, FieldPath, FieldValues} from 'react-hook-form';

import TextInput from '../../../atoms/TextInput';
import {ControlledTextInputProps} from './types';
import ErrorMessage from '../../ErrorMessage';
import {View} from 'react-native';
import styles from '../styles';

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
}: ControlledTextInputProps<TFieldValues, TName>) => {
  return (
    <View style={styles.controlledInputContainer}>
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
            value={value?.toString()}
            keyboardType={keyboardType}
          />
        )}
      />
      <ErrorMessage error={error} />
    </View>
  );
};

export default ControlledTextInput;
