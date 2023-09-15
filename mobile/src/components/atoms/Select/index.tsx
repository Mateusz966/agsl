import * as React from 'react';
import {SelectProps} from './types';
import DropDown from 'react-native-paper-dropdown';
import {useSelectVisibility} from './useSelectVisibilty';
import {memo} from 'react';

const Select = ({options, title, value, onChange}: SelectProps) => {
  const {handleSelectOnDissmiss, setSelectVisible, selectVisible} =
    useSelectVisibility();
  return (
    <DropDown
      label={title}
      mode={'outlined'}
      visible={selectVisible}
      showDropDown={() => setSelectVisible(true)}
      onDismiss={() => handleSelectOnDissmiss()}
      value={value}
      setValue={onChange}
      list={options}
    />
  );
};

export default memo(Select);
