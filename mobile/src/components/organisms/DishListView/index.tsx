import React, {memo} from 'react';
import {FlatList, View} from 'react-native';
import DishCard from '../../molecules/DishCard';

import useDishList from './useDishList';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigators/types';
import {useDishContext} from '../../../common/contexts/DishContext/useDishContext';
import {Scenes} from '../../../navigators/const';

const DishListView = () => {
  const {setDishId} = useDishContext();
  const {dishListResponse, isDishListLoading, refetchDishList} = useDishList();
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View>
      <FlatList
        data={dishListResponse}
        onRefresh={refetchDishList}
        refreshing={isDishListLoading}
        renderItem={({item}) => (
          <DishCard
            key={item.id}
            dish={item}
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
