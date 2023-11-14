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
  console.log(
    data?.find(d => d.id === '4a6d1955-855e-45fa-94d0-a77c4b878754')
      ?.ingredients,
  );

  const navigateToDishForm = useCallback(
    (dish?: DishListResponse) => {
      if (dish) {
        navigation.navigate(Scenes.AddDish, {
          id: dish.id,
          name: dish.name,
          ingredients: dish.ingredients.map(ingredient => ({
            ingredientId: ingredient.ingredientId,
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
