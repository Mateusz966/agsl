import * as React from 'react';
import {Card} from 'react-native-paper';
import {PhotoProps} from './types';
import {memo} from 'react';

const Photo: React.FC<PhotoProps> = ({uri, style}) => (
  <Card.Cover style={style} source={{uri}} />
);

export default memo(Photo);
