import * as React from 'react';
import {SelectProps} from './types';
import DropDown from 'react-native-paper-dropdown';
import {useSelectVisibility} from './useSelectVisibilty';
import {FC, memo} from 'react';

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
