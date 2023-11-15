import React, {memo, useCallback} from 'react';
import {ScrollView} from 'react-native';
import EntryPageContent from '../templates/EntryPageContent';
import Keychain from 'react-native-keychain';
import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {RootStackParamList} from '../../navigators/types';
import {Scenes} from '../../navigators/const';

const Entry = () => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  const isLogged = async () => {
    const credentials = await Keychain.getGenericPassword();

    if (credentials) {
      navigate(Scenes.DishList);
    }
  };

  useFocusEffect(
    useCallback(() => {
      void isLogged();
    }, []),
  );

  return (
    <ScrollView style={{paddingHorizontal: 20}}>
      <EntryPageContent />
    </ScrollView>
  );
};
export default memo(Entry);
