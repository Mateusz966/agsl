import {useCallback, useMemo, useState} from 'react';
import {EditDishForm} from '../../../api/dish/types';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import {Scenes} from '../../../navigators/const';
import {useFieldArray, useForm} from 'react-hook-form';
import {
  AddDish,
  addDishSchema,
} from '../../../components/organisms/DishForm/validation';
import {zodResolver} from '@hookform/resolvers/zod';
import useDish from './useDish';
import {createFormData, getDefaultDishFormValues} from './helpers';
import {UseDishFormProps} from './types';
import {useMutateDish} from './useMutateDish';

const useDishForm = ({img}: UseDishFormProps) => {
  const routeName = useRoute().name;
  const {dishResponse, isDishLoading} = useDish(routeName === Scenes.EditDish);
  const [formInitialized, setFormInitialized] = useState(false);
  const [ingredientIdsToDelete, setIngredientIdsToDelete] = useState<string[]>(
    [],
  );
  const {addDishMutation, editDishMutation} = useMutateDish({
    setIngredientIdsToDelete,
  });

  const responseDishValue = useMemo(
    () => getDefaultDishFormValues(routeName as Scenes, dishResponse),
    [dishResponse, routeName],
  );

  const form = useForm<AddDish>({
    resolver: zodResolver(addDishSchema),
    mode: 'onChange',
    defaultValues: responseDishValue,
  });

  const {append, fields, remove} = useFieldArray({
    control: form.control,
    name: 'ingredients',
  });

  useFocusEffect(
    useCallback(() => {
      if (
        !formInitialized &&
        dishResponse &&
        routeName === Scenes.EditDish &&
        !isDishLoading
      ) {
        form.reset(responseDishValue);
        setFormInitialized(true);
      }
    }, [
      formInitialized,
      dishResponse,
      form,
      responseDishValue,
      routeName,
      isDishLoading,
    ]),
  );

  const removeIngredient = (
    ingredientId: string | undefined,
    index: number,
  ) => {
    if (ingredientId) {
      setIngredientIdsToDelete(prevState => [ingredientId, ...prevState]);
    }
    remove(index);
  };

  const onSubmit = useCallback(
    (payload: EditDishForm) => {
      const dishData = createFormData(
        payload,
        img,
        dishResponse,
        ingredientIdsToDelete,
      );
      if (dishResponse?.id && routeName === Scenes.EditDish) {
        editDishMutation.mutate({
          id: dishResponse.id,
          dish: dishData,
        });
      } else {
        addDishMutation.mutate(dishData);
      }
    },
    [
      img,
      dishResponse,
      ingredientIdsToDelete,
      routeName,
      editDishMutation,
      addDishMutation,
    ],
  );

  const onCancel = () => {
    form.reset();
  };

  return {
    append,
    remove,
    fields,
    form,
    onSubmit,
    onCancel,
    removeIngredient,
    isDishLoading,
  };
};
export default useDishForm;
