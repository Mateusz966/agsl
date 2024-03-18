import React, {memo} from 'react';
import {Text} from 'react-native-paper';
import {ScrollView, View} from 'react-native';
import {Link} from '@react-navigation/native';
import {LoginPhoto} from 'assets';
import {RootScenes} from 'navigators/RootNavigation';
import {LoginForm} from 'organisms';
import {styles} from '.';

const LoginPageContent = () => (
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

export default memo(LoginPageContent);
