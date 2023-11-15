import React, {memo} from 'react';
import {View} from 'react-native';
import EntryScreenPhoto from '../../../assets/EntryScreenPhoto';
import {Text} from 'react-native-paper';
import {Button} from '../../atoms';
import {styles} from './style';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigators/types';
import {Scenes} from '../../../navigators/const';

const EntryPageContent = () => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <>
      <View style={styles.photoWrapper}>
        <EntryScreenPhoto />
      </View>
      <Text variant="headlineMedium" style={styles.company}>
        AGSL
      </Text>
      <Text variant="headlineMedium" style={styles.description}>
        Everything you need is in one place
      </Text>
      <Text variant="bodyMedium">
        Lorem ipsum dol Lorem ipsum dol Lorem ipsum dol Lorem ipsum dol{' '}
      </Text>
      <Button onPress={() => {
          navigate(Scenes.Login)
      }} style={styles.loginBtn}>
        Login
      </Button>
      <Button style={styles.registerBtn} textColor="black" mode="outlined">
        Register
      </Button>
    </>
  );
};

export default memo(EntryPageContent);
