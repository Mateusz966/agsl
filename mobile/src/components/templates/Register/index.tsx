import React, {memo} from 'react';
import {Text} from 'react-native-paper';
import {View} from 'react-native';
import LoginPhoto from '../../../assets/LoginPhoto';
import RegisterForm from "../../organisms/RegisterForm";

const RegisterTemplate = () => {
  return (
    <>
      <View
        style={{width: '100%', height: 200, marginTop: 100, marginBottom: 20}}>
        <LoginPhoto />
      </View>
      <Text variant="headlineMedium" style={{marginBottom: 15}}>
        Register
      </Text>
      <Text variant="bodyMedium" style={{marginBottom: 15}}>
        Register to start using the app
      </Text>
      <RegisterForm />
      <View>
        <Text variant="bodySmall">Have an account?</Text>
      </View>
    </>
  );
};

export default memo(RegisterTemplate);
