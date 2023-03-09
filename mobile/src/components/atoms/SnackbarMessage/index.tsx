import React from 'react';
import {Snackbar} from 'react-native-paper';
import {DEFAULT_DURATION} from './const';
import {SnackbarMessageProps} from './types';

const SnackbarMessage = ({visible, text, onDismiss}: SnackbarMessageProps) => (
  <Snackbar
    visible={visible}
    duration={DEFAULT_DURATION}
    onDismiss={onDismiss}
    action={{
      label: 'Undo',
      onPress: onDismiss,
    }}>
    {text}
  </Snackbar>
);

export default SnackbarMessage;
