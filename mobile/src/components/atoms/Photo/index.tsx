import * as React from 'react';
import {Card} from 'react-native-paper';
import {PhotoProps} from './types';

const Photo = ({source}: PhotoProps) => <Card.Cover source={{uri: source}} />;

export default Photo;
