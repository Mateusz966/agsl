import React, {memo} from 'react';
import {View} from 'react-native';
import Button from '../../atoms/Button';
import TextInput from '../../atoms/TextInput';

const LoginComponent = () => (
  <View>
    <TextInput label="email" />
    <TextInput label="password" />
    <Button mode="contained" onPress={() => {}}>
      Login
    </Button>
  </View>
);
export default memo(LoginComponent);
