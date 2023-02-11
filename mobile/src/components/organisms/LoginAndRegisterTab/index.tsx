import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import LoginComponent from '../../molecules/LoginComponent';
import RegisterComponent from '../../molecules/RegisterComponent';
import Tabs from '../../molecules/Tabs';
import {TABS} from './const';

const LoginOrRegisterTab = () => {
  const [value, setValue] = useState('register');
  return (
    <SafeAreaView>
      <Tabs />
    </SafeAreaView>
  );
};

export default LoginOrRegisterTab;
