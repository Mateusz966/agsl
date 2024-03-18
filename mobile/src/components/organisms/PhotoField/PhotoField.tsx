import React, {memo} from 'react';
import {Photo} from 'atoms';
import {PhotoActionWrapper, PressableTextBox} from 'molecules';
import {PhotoFieldProps, styles} from '.';

const PhotoField = ({
  handleChange,
  handleDelete,
  source,
  handleOnPress,
}: PhotoFieldProps) =>
  source ? (
    <PhotoActionWrapper
      primaryButtonProps={{onPress: handleChange, text: 'Edit'}}
      secondaryButtonProps={{onPress: handleDelete, text: 'Delete'}}
      containerStyle={styles.container}>
      <Photo uri={source} style={styles.image} />
    </PhotoActionWrapper>
  ) : (
    <PressableTextBox onPressHandler={handleOnPress} text="Add photo" />
  );

export default memo(PhotoField);
