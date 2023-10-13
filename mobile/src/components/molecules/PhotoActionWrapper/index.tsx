import * as React from 'react';
import {Card} from 'react-native-paper';
import {FC, PropsWithChildren, memo} from 'react';
import ActionButtonsContainer from '../ActionButtonsContainer';
import {ActionButtonsContainerProps} from '../ActionButtonsContainer/types';

const PhotoActionWrapper: FC<
  PropsWithChildren<ActionButtonsContainerProps>
> = ({
  children,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonHandler,
  secondaryButtonHandler,
  containerStyle,
}) => (
  <Card style={containerStyle}>
    <ActionButtonsContainer
      primaryButtonText={primaryButtonText}
      secondaryButtonText={secondaryButtonText}
      primaryButtonHandler={primaryButtonHandler}
      secondaryButtonHandler={secondaryButtonHandler}
    />
    {children}
  </Card>
);

export default memo(PhotoActionWrapper);
