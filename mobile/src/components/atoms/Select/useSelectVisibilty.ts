import {useCallback, useState} from 'react';

export const useSelectVisibility = () => {
  const [selectVisible, setSelectVisible] = useState(false);

  const handleSelectOnDissmiss = useCallback(
    () => setSelectVisible(!selectVisible),
    [setSelectVisible, selectVisible],
  );

  return {setSelectVisible, selectVisible, handleSelectOnDissmiss};
};
