import React, {FC, memo} from 'react';
import {Portal, Snackbar as PaperSnackbar} from 'react-native-paper';
import {SnackbarProps, DEFAULT_DURATION, styles} from '.';

const Snackbar: FC<SnackbarProps> = ({visible, children, onDismiss, isError}) =>
  visible ? (
    <Portal>
      <PaperSnackbar
        visible={visible}
        wrapperStyle={styles.container}
        duration={DEFAULT_DURATION}
        onDismiss={onDismiss}
        action={{
          label: 'Undo',
          onPress: onDismiss,
        }}
        style={isError ? styles.error : styles.success}>
        {children}
      </PaperSnackbar>
    </Portal>
  ) : (
    <></>
  );

export default memo(Snackbar);
