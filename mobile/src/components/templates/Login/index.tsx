import React, {memo} from 'react';
import {Text} from 'react-native-paper';
import {View} from 'react-native';
import LoginPhoto from '../../../assets/LoginPhoto';
import LoginForm from '../../organisms/LoginForm';
import {Link} from '@react-navigation/native';
import {Scenes} from '../../../navigators/const';
import {styles} from './style';

const LoginTemplate = () => {
  return (
    <>
      <View style={styles.photoWrapper}>
        <LoginPhoto />
      </View>
      <Text variant="headlineMedium" style={styles.title}>
        Login
      </Text>
      <Text variant="bodyMedium" style={styles.subtitle}>
        Login to continue using the app
      </Text>
      <LoginForm />
      <View style={styles.footer}>
        <Text variant="bodyMedium">Don't have an account?</Text>
        <Link to={{screen: Scenes.Register}}> Register</Link>
      </View>
    </>
  );
};

export default memo(LoginTemplate);
