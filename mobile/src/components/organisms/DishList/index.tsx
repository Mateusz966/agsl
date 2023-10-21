import {useInfiniteQuery} from '@tanstack/react-query';
import React, {memo} from 'react';
import {ScrollView} from 'react-native';
import {getDishList} from '../../../api/dish';
import DishCard from '../../molecules/DishCard';

const DishList = () => {
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

  console.log(data);

  return (
    <ScrollView>
      <DishCard dishName="Spaghetti" />
    </ScrollView>
  );
};
export default memo(DishList);
