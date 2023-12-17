import React, {memo} from 'react';
import {Text} from 'react-native-paper';
import {ScrollView, View} from 'react-native';
import LoginPhoto from '../../../assets/LoginPhoto';
import RegisterForm from '../../organisms/RegisterForm';
import {styles} from './styles';

const RegisterTemplate = () => (
  <ScrollView style={styles.scrollView}>
    <View style={styles.photoWrapper}>
      <LoginPhoto />
    </View>
    <Text variant="headlineMedium" style={styles.title}>
      Register
    </Text>
    <Text variant="bodyMedium" style={styles.subtitle}>
      Register to start using the app
    </Text>
    <RegisterForm />
    <View>
      <Text variant="bodySmall">Have an account?</Text>
    </View>
  </ScrollView>
);

export default memo(RegisterTemplate);
