import {useInfiniteQuery} from '@tanstack/react-query';
import React, {memo} from 'react';
import {ScrollView} from 'react-native';
import {getDishList} from '../../../api/dish';
import DishCard from '../../molecules/DishCard';
import {useNavigation} from '@react-navigation/native';
import {AddDishNavigationProps} from '../../../navigators/types';
import {Scenes} from '../../../navigators/const';
import {DishRequest, Unit} from '../../../api/dish/types';

const DishList = () => {
  const navigation = useNavigation<AddDishNavigationProps>();

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['dishList'],
    queryFn: getDishList,
  });

  return (
    <ScrollView>
      <DishCard
        dishName="Spaghetti"
        onPressHandler={() =>
          navigation.navigate(Scenes.AddDish, {
            ingredients: [
              {name: 'Pasta', amount: '100', unit: Unit.g},
              {name: 'Potato', amount: '100', unit: Unit.g},
            ],
            name: 'Spaghetti',
          } as DishRequest)
        }
      />
    </ScrollView>
  );
};
export default memo(DishList);
