import React from 'react';
import {SegmentedButtons} from 'react-native-paper';
import {TabProps} from './types';

const Tabs = ({value, setValue}: TabProps) => {
  return (
    <SegmentedButtons
      value={value}
      onValueChange={setValue}
      buttons={[
        {
          value: 'login',
          label: 'Sign in',
        },
        {
          value: 'register',
          label: 'Sign up',
        },
      ]}
    />
  );
};

export default Tabs;
