import {useCallback, useState} from 'react';

export const useModalVisibility = () => {
  const [visible, setVisible] = useState(false);

  const handleOnDissmiss = useCallback(
    () => setVisible(!visible),
    [setVisible, visible],
  );

  return {setVisible, handleOnDissmiss, visible};
};
