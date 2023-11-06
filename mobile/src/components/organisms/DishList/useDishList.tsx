import {useInfiniteQuery} from '@tanstack/react-query';
import {getDishList} from '../../../api/dish';
import {DishListResponse} from './types';
import {useNavigation} from '@react-navigation/native';
import {AddDishNavigationProps} from '../../../navigators/types';
import {Scenes} from '../../../navigators/const';
import {useCallback} from 'react';

const useDishList = () => {
  const navigation = useNavigation<AddDishNavigationProps>();

  const {data} = useInfiniteQuery<DishListResponse>({
    queryKey: ['dishList'],
    queryFn: getDishList,
  });

  const navigateToDishForm = useCallback(
    (dish?: DishListResponse) => {
      if (dish) {
        navigation.navigate(Scenes.AddDish, {
          ingredients: dish.ingredients.map(ingredient => {
            return {
              name: ingredient.name,
              amount: ingredient.amount,
              unit: ingredient.unit,
            };
          }),
          name: dish.name,
        });
      }
    },
    [navigation],
  );

  return {
    response: (data?.pages.flatMap(page => page) as DishListResponse[]) ?? [],
    navigateToDishForm,
  };
};

export default useDishList;
