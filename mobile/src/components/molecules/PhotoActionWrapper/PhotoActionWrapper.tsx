import React, {FC, PropsWithChildren, memo} from 'react';
import {Card} from 'react-native-paper';

import {styles} from '.';
import {ActionButtonsContainerProps} from '../ActionButtonsContainer';
import {ActionButtonsContainer} from 'molecules';

const PhotoActionWrapper: FC<
  PropsWithChildren<ActionButtonsContainerProps>
> = ({children, primaryButtonProps, secondaryButtonProps, containerStyle}) => (
  <Card style={containerStyle}>
    <ActionButtonsContainer
      primaryButtonProps={primaryButtonProps}
      secondaryButtonProps={secondaryButtonProps}
      containerStyle={styles.buttonContainer}
    />
    {children}
  </Card>
);

export default memo(PhotoActionWrapper);
