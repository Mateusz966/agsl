import React from 'react';
import {Snackbar} from 'react-native-paper';
import {DEFAULT_DURATION} from './const';
import {styles} from './styles';
import {SnackBarProps} from './types';

const SnackbarMessage = ({visible, children, onDismiss}: SnackBarProps) => (
  <Snackbar
    visible={visible}
    wrapperStyle={styles.container}
    duration={DEFAULT_DURATION}
    onDismiss={onDismiss}
    action={{
      label: 'Undo',
      onPress: onDismiss,
    }}>
    {children}
  </Snackbar>
);

export default SnackbarMessage;
