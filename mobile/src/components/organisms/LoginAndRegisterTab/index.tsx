import React, {useState} from 'react';
import {View} from 'react-native';
import Tabs from '../../molecules/Tabs';

const LoginOrRegisterTab = () => {
  const [index, setIndex] = useState(0);
  return <Tabs index={index} setIndex={setIndex} />;
};

export default LoginOrRegisterTab;
