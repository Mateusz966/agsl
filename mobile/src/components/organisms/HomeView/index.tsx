import React from 'react';
import ButtonGroup from '../../molecules/ButtonGroup';
import {View} from 'react-native';
import {HOME_BUTTON_GROUP} from './const';

const HomeView = () => (
  <View
    style={{
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
    }}>
    <ButtonGroup buttons={HOME_BUTTON_GROUP} display={'horizontal'} />
  </View>
);
export default HomeView;
