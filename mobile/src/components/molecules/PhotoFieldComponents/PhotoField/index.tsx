import * as React from 'react';
import {PhotoFieldProps} from './types';
import Photo from '../../../atoms/Photo';
import PhotoActionWrapper from '../PhotoActionWrapper';
import PressableTextBox from '../PressableTextBox';
import {memo} from 'react';
import {styles} from './styles';

const PhotoField = ({
  handleChange,
  handleDelete,
  source,
  handleOnPress,
}: PhotoFieldProps) =>
  source ? (
    <PhotoActionWrapper
      primaryButtonHandler={handleChange}
      secondaryButtonHandler={handleDelete}
      primaryButtonText="Edit"
      secondaryButtonText="Delete"
      containerStyle={styles.container}>
      <Photo source={source} style={styles.image}></Photo>
    </PhotoActionWrapper>
  ) : (
    <PressableTextBox
      onPressHandler={handleOnPress}
      text="Add photo"></PressableTextBox>
  );

export default memo(PhotoField);
