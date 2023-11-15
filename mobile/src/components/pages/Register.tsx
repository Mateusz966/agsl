import React, {memo} from 'react';
import {ScrollView} from 'react-native';
import RegisterTemplate from '../templates/Register';

const Register = () => {
  return (
    <ScrollView style={{paddingHorizontal: 20}}>
      <RegisterTemplate />
    </ScrollView>
  );
};

export default memo(Register);
