import React, {useCallback, useState} from 'react';
import {SnackbarContext, SnackbarProviderProps} from './SnackbarContext';
import {SnackbarContextProps, SnackbarStateProps} from './types';
import Snackbar from '../../../components/atoms/Snackbar';
import {useFocusEffect} from '@react-navigation/native';

export const SnackbarProvider = ({children}: SnackbarProviderProps) => {
  const [snackbarState, setSnackbarState] = useState<SnackbarStateProps>({
    visible: false,
    text: '',
    isError: false,
  });

  const handleOnDismiss = useCallback(
    () => setSnackbarState({visible: !snackbarState.visible}),
    [snackbarState.visible],
  );

  useFocusEffect(
    useCallback(() => {
      return () => setSnackbarState({visible: false});
    }, []),
  );

  const value: SnackbarContextProps = {
    setSnackbarState,
  };

  return (
    <SnackbarContext.Provider value={value}>
      <Snackbar
        isError={!!snackbarState.isError}
        visible={snackbarState.visible}
        onDismiss={handleOnDismiss}>
        {snackbarState.text}
      </Snackbar>
      {children}
    </SnackbarContext.Provider>
  );
};
