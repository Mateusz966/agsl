import React, {memo} from 'react';
import {ScrollView, View} from 'react-native';
import {Text} from 'react-native-paper';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {EntryScreenPhoto} from 'assets';
import {RootScenes, RootStackParamList} from 'navigators/RootNavigation';
import {Button} from 'atoms';
import {styles} from '.';

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
          navigate(RootScenes.Login);
        }}
        style={styles.loginBtn}>
        Login
      </Button>
      <Button
        style={styles.registerBtn}
        onPress={() => navigate(RootScenes.Register)}
        textColor="black"
        mode="outlined">
        Register
      </Button>
    </ScrollView>
  );
};

export default memo(EntryPageContent);
