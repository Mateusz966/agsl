import React, {useCallback, useState} from 'react';
import {SnackbarContext, SnackbarProviderProps} from './SnackbarContext';
import {SnackbarContextProps} from './types';

export const SnackbarProvider = ({children}: SnackbarProviderProps) => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');

  const handleOnDismiss = useCallback(
    () => setVisible(!visible),
    [setVisible, visible],
  );

  const value: SnackbarContextProps = {
    visible,
    setVisible,
    handleOnDismiss,
    text,
    setText,
  };

  return (
    <SnackbarContext.Provider value={value}>
      {children}
    </SnackbarContext.Provider>
  );
};
