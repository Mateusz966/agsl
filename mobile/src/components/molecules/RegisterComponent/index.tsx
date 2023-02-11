import React, {memo} from 'react';
import {View} from 'react-native';
import Button from '../../atoms/Button';
import TextInput from '../../atoms/TextInput';

const RegisterComponent = () => (
  <View>
    <TextInput label="nick" />
    <TextInput label="email" />
    <TextInput label="password" />
    <Button mode="contained" onPress={() => {}}>
      Register
    </Button>
  </View>
);
export default memo(RegisterComponent);
