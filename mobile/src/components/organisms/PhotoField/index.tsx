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
      primaryButtonProps={{onPress: handleChange, text: 'Edit'}}
      secondaryButtonProps={{onPress: handleDelete, text: 'Delete'}}
      containerStyle={styles.container}>
      <Photo source={source} style={styles.image} />
    </PhotoActionWrapper>
  ) : (
    <PressableTextBox onPressHandler={handleOnPress} text="Add photo" />
  );

export default memo(PhotoField);