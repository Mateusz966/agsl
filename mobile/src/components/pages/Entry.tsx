import React, {memo} from 'react';
import EntryPageContent from '../templates/EntryPageContent';
import {} from '@react-navigation/native';
import {Scenes} from '../../navigators/const';
import useIsUserAuthenticated from '../templates/Login/useIsUserAuthenticated';

const Entry = () => {
  useIsUserAuthenticated(Scenes.DishList);

  return <EntryPageContent />;
};
export default memo(Entry);
