import React, {FC, memo} from 'react';
import DropDown from 'react-native-paper-dropdown';
import {SelectProps, useSelectVisibility} from '.';

const Select: FC<SelectProps> = ({options, title, value, onChange}) => {
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
