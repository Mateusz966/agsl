import React, {FC, memo} from 'react';
import {Snackbar, SnackbarProps} from 'react-native-paper';
import {DEFAULT_DURATION} from './const';
import {styles} from './styles';

const SnackbarMessage: FC<SnackbarProps> = ({visible, children, onDismiss}) => (
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

export default memo(SnackbarMessage);
