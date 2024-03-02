import {NavigationContainerRef} from '@react-navigation/native';
import {createRef} from 'react';
import {RootStackParamList} from './types';
import {Scenes} from './const';

export const navigationRef =
  createRef<NavigationContainerRef<RootStackParamList>>();

export const navigate = (name: Scenes, params?: any) => {
  navigationRef.current?.navigate(name, params);
};
