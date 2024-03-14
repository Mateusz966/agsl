import React, {memo} from 'react';
import {Text} from 'react-native-paper';
import {ScrollView, View} from 'react-native';
import LoginPhoto from '../../../assets/LoginPhoto';
import LoginForm from '../../organisms/LoginForm';
import {Link} from '@react-navigation/native';
import {styles} from './styles';
import {RootScenes} from '../../../navigators/RootNavigation/types';

const LoginTemplate = () => (
  <ScrollView style={styles.scrollView}>
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
      <Link to={{screen: RootScenes.Register}}> Register</Link>
    </View>
  </ScrollView>
);

export default memo(LoginTemplate);
