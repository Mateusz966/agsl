import * as React from 'react';
import {Card} from 'react-native-paper';
import {FC, PropsWithChildren, memo} from 'react';
import ActionButtonsContainer from '../ActionButtonsContainer';
import {ActionButtonsContainerProps} from '../ActionButtonsContainer/types';

const PhotoActionWrapper: FC<
  PropsWithChildren<ActionButtonsContainerProps>
> = ({children, primaryButtonProps, secondaryButtonProps, containerStyle}) => (
  <Card style={containerStyle}>
    <ActionButtonsContainer
      primaryButtonProps={primaryButtonProps}
      secondaryButtonProps={secondaryButtonProps}
    />
    {children}
  </Card>
);

export default memo(PhotoActionWrapper);
