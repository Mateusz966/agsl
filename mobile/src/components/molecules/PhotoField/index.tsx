import * as React from 'react';
import {Card, Text} from 'react-native-paper';
import {PhotoFieldProps} from './types';
import Button from '../../molecules/Button';
import Photo from '../../atoms/Photo';
import {ButtonType} from '../Button/types';
import {Pressable} from 'react-native';

const PhotoField = ({
  handleChange,
  handleDelete,
  source,
  handleOnPress,
}: PhotoFieldProps) => (
  <Card>
    {source && (
      <>
        <Card.Actions
          style={{
            zIndex: 1,
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Button onPress={handleDelete} type={ButtonType.Secondary}>
            Save
          </Button>
          <Button onPress={handleChange} type={ButtonType.Secondary}>
            Cancel
          </Button>
        </Card.Actions>
        <Photo source={source}></Photo>
      </>
    )}
    <Pressable onPress={handleOnPress}>
      <Card.Content
        style={{
          zIndex: -1,
          position: 'absolute',
          height: 195,
          overflow: 'hidden',
        }}>
        <Text>hello</Text>
      </Card.Content>
    </Pressable>
  </Card>
);

export default PhotoField;
