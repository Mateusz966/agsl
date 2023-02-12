import React from 'react';
import {useController, UseControllerProps} from 'react-hook-form';

import TextInput from '../../atoms/TextInput';

const ControlledTextInput = ({control, name, ...props}: UseControllerProps) => {
  const {
    field: {onChange, onBlur, value},
  } = useController({
    name,
    control,
    defaultValue: '',
  });
  return (
    <TextInput
      name={name}
      control={control}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      label={name}
      placeholder={name}
      {...props}
    />
  );
};

export default ControlledTextInput;
