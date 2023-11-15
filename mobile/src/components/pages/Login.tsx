import React, {memo} from 'react';
import LoginTemplate from '../templates/Login';
import {ScrollView} from "react-native";

const Login = () => {
  return <ScrollView style={{ paddingHorizontal: 20, flex: 1 }}><LoginTemplate /></ScrollView>;
};

export default memo(Login);
