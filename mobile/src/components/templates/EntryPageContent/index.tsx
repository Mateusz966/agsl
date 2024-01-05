import React, {memo} from 'react';
import {ScrollView, View} from 'react-native';
import EntryScreenPhoto from '../../../assets/EntryScreenPhoto';
import {Text} from 'react-native-paper';
import {Button} from '../../atoms';
import {styles} from './styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigators/RootNavigation/types';
import {Scenes} from '../../../navigators/RootNavigation/const';

const EntryPageContent = () => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <ScrollView style={styles.scrollView}>
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
      <Button
        onPress={() => {
          navigate(Scenes.Login);
        }}
        style={styles.loginBtn}>
        Login
      </Button>
      <Button
        style={styles.registerBtn}
        onPress={() => navigate(Scenes.Register)}
        textColor="black"
        mode="outlined">
        Register
      </Button>
    </ScrollView>
  );
};

export default memo(EntryPageContent);
