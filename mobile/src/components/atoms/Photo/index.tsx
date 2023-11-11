import * as React from 'react';
import {Card} from 'react-native-paper';
import {PhotoProps} from './types';
import {memo} from 'react';

const Photo: React.FC<PhotoProps> = ({source, style}) => (
  <Card.Cover style={style} source={{uri: source}} />
);

export default memo(Photo);
