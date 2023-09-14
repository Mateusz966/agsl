import * as React from 'react';
import {List, RadioButton} from 'react-native-paper';
import {SelectProps} from './types';
import TextInput from '../../atoms/TextInput';
import DropDown from 'react-native-paper-dropdown';
import {useState} from 'react';

const Select = ({options, title, expanded, onChange, value}: SelectProps) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [gender, setGender] = useState<string>('');
  return (
    <DropDown
      label={title}
      mode={'outlined'}
      visible={showDropDown}
      showDropDown={() => setShowDropDown(true)}
      onDismiss={() => setShowDropDown(false)}
      value={value}
      setValue={setGender}
      list={options}
    />
  );
};

export default Select;
