import {useQuery} from '@tanstack/react-query';
import {getDishList} from '../../../api/dish';
import {DishListResponse} from './types';
import {useNavigation} from '@react-navigation/native';
import {AddDishNavigationProps} from '../../../navigators/types';
import {Scenes} from '../../../navigators/const';
import {useCallback} from 'react';
import {useDishContext} from '../DishForm/hooks/DishContext/useDishContext';

const useDishList = () => {
  const navigation = useNavigation<AddDishNavigationProps>();
  const {dishId} = useDishContext();

  const {data, isLoading} = useQuery<DishListResponse[]>({
    queryKey: ['dishList', dishId],
    queryFn: getDishList,
  });

  const navigateToDishForm = useCallback(
    (dish?: DishListResponse) => {
      if (dish) {
        navigation.navigate(Scenes.AddDish, {
          id: dish.id,
          name: dish.name,
          ingredients: dish.ingredients.map(ingredient => ({
            name: ingredient.name,
            amount: ingredient.amount,
            unit: ingredient.unit,
          })),
          photo: dish.photo,
        });
      }
    },
    [navigation],
  );

  return {
    response: data ?? [],
    isLoading,
    navigateToDishForm,
  };
};

export default useDishList;
