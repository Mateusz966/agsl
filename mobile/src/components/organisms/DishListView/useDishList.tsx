import {useQuery} from '@tanstack/react-query';
import {getDishList} from '../../../api/dish';
import {DishListResponse} from './types';

const useDishList = () => {
  const {data, isLoading, refetch} = useQuery<DishListResponse[]>({
    queryKey: ['dishList'],
    queryFn: getDishList,
  });

  return {
    response: data ?? [],
    isLoading,
    refetch,
  };
};

export default useDishList;
