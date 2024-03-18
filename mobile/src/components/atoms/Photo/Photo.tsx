import React, {memo} from 'react';
import {Card} from 'react-native-paper';
import {PhotoProps} from '.';

const Photo: React.FC<PhotoProps> = ({uri, style}) => (
  <Card.Cover style={style} source={{uri}} />
);

export default memo(Photo);
