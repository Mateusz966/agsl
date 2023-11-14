import React, {memo} from 'react';
import {FlatList, View} from 'react-native';
import DishCard from '../../molecules/DishCard';

import useDishList from './useDishList';

const DishList = () => {
  const {response, navigateToDishForm, isLoading, refetch} = useDishList();
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
            onPressHandler={() => navigateToDishForm(item)}
          />
        )}
      />
    </View>
  );
};
export default memo(DishList);
