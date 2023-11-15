import React, {memo} from 'react';
import {Text} from 'react-native-paper';
import {ScrollView, View} from 'react-native';
import EntryScreenPhoto from '../../assets/EntryScreenPhoto';
import {Button} from '../atoms';

const Entry = () => {
  return (
    <ScrollView style={{paddingHorizontal: 20}}>
      <View
        style={{width: '100%', height: 200, marginTop: 100, marginBottom: 30}}>
        <EntryScreenPhoto />
      </View>
      <Text variant="headlineMedium" style={{marginBottom: 10}}>
        AGSL
      </Text>
      <Text variant="headlineMedium" style={{marginBottom: 15}}>
        Everything you need is in one place
      </Text>
      <Text variant="bodyMedium">
        Lorem ipsum dol Lorem ipsum dol Lorem ipsum dol Lorem ipsum dol{' '}
      </Text>
      <Button style={{marginVertical: 15}}>Login</Button>
      <Button
        style={{backgroundColor: 'white'}}
        textColor="black"
        mode="outlined">
        Register
      </Button>
    </ScrollView>
  );
};
export default memo(Entry);
