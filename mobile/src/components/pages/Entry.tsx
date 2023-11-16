import React, {memo} from 'react';
import EntryPageContent from '../templates/EntryPageContent';
import {} from '@react-navigation/native';
import {Scenes} from '../../navigators/const';
import useNavigateLoggedUser from '../../navigators/useNavigateLoggedUser';

const Entry = () => {
  useNavigateLoggedUser(Scenes.DishList);

  return <EntryPageContent />;
};
export default memo(Entry);
