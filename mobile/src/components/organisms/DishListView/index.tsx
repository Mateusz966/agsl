import React, {memo} from 'react';
import {FlatList, View} from 'react-native';
import DishCard from '../../molecules/DishCard';

import useDishList from './useDishList';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigators/types';
import {useDishContext} from '../DishForm/hooks/DishContext/useDishContext';
import {Scenes} from '../../../navigators/const';

const DishListView = () => {
  const {response, isLoading, refetch} = useDishList();
  const {setDishId} = useDishContext();
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View>
      <FlatList
        data={response}
        onRefresh={refetch}
        refreshing={isLoading}
        renderItem={({item}) => (
          <DishCard
            key={item.id}
            dishName={item.name}
            photoSource={item.photo}
            onPressHandler={() => {
              setDishId(item.id);
              navigate(Scenes.EditDish);
            }}
          />
        )}
      />
    </View>
  );
};
export default memo(DishListView);
