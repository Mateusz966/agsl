import {NavigationContainerRef} from '@react-navigation/native';
import {createRef} from 'react';
import {RootScenes, RootStackParamList} from './RootNavigation.types';

export const navigationRef =
  createRef<NavigationContainerRef<RootStackParamList>>();

export const navigate = (name: RootScenes, params?: any) => {
  navigationRef.current?.navigate(name, params);
};
