import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {SegmentedButtons} from 'react-native-paper';
import LoginComponent from '../../molecules/LoginComponent';
import RegisterComponent from '../../molecules/RegisterComponent';
import Tabs from '../../molecules/Tabs';

const LoginOrRegisterTab = () => {
  const [value, setValue] = useState('login');
  return (
    <>
      <Tabs value={value} setValue={setValue} />
      {value === 'login' ? <LoginComponent /> : <RegisterComponent />}
    </>
  );
};

export default LoginOrRegisterTab;
