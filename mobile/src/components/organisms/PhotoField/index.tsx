import * as React from 'react';
import {PhotoFieldProps} from './types';
import Photo from '../../atoms/Photo';
import PhotoActionWrapper from '../../molecules/PhotoActionWrapper';
import PressableTextBox from '../../molecules/PressableTextBox';
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
      <Photo uri={source} style={styles.image} />
    </PhotoActionWrapper>
  ) : (
    <PressableTextBox onPressHandler={handleOnPress} text="Add photo" />
  );

export default memo(PhotoField);
