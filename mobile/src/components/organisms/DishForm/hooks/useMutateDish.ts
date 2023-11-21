import {zodResolver} from '@hookform/resolvers/zod';
import {useFieldArray, useForm} from 'react-hook-form';
import {AddDish, addDishSchema} from '../validation';
import {useMutation} from '@tanstack/react-query';
import {EditDishForm} from '../../../../api/dish/types';
import {addDish, editDish} from '../../../../api/dish';
import {useCallback, useMemo, useState} from 'react';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import {useSnackbarContext} from '../../../atoms/SnackbarMessage/useSnackbarContext';
import {EditDishRequest, UseMutateDishProps} from './types';
import {DEFAULT_DISH_FORM_VALUE} from './const';
import {AxiosError} from 'axios';
import useDish from './useDish';
import useDishList from '../../DishListView/useDishList';
import {useDishContext} from './DishContext/useDishContext';
import {Scenes} from '../../../../navigators/const';

export const useMutateDish = ({img}: UseMutateDishProps) => {
  const {setText, setVisible} = useSnackbarContext();
  const {dishResponse, refetchDish, isDishLoading} = useDish();
  const [formInitialized, setFormInitialized] = useState(false);
  const [ingredientIdsToDelete, setIngredientIdsToDelete] = useState<string[]>(
    [],
  );
  const {refetchDishList} = useDishList();
  const routeName = useRoute().name;

  const responseDishValue = useMemo(
    () =>
      dishResponse && routeName === Scenes.EditDish
        ? {
            id: dishResponse.id,
            name: dishResponse.name,
            ingredients: dishResponse.ingredients,
            photo: dishResponse.photo,
          }
        : DEFAULT_DISH_FORM_VALUE,
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
        !isDishLoading &&
        routeName === Scenes.EditDish
      ) {
        form.reset(responseDishValue);
        setFormInitialized(true);
      }
    }, [
      formInitialized,
      dishResponse,
      isDishLoading,
      routeName,
      form,
      responseDishValue,
    ]),
  );

  const addDishMutation = useMutation<void, void, FormData>({
    mutationFn: payload => addDish(payload),
    onSuccess: () => {
      setVisible(true);
      setText('Your dish was added sucessfully');
      form.reset();
    },
    onError: error => {
      setVisible(true);
      setText(`${error}`);
    },
  });

  const removeIngredient = (
    ingredientId: string | undefined,
    index: number,
  ) => {
    if (ingredientId) {
      setIngredientIdsToDelete(prevState => [ingredientId, ...prevState]);
    }
    remove(index);
  };

  const editDishMutation = useMutation<void, AxiosError, EditDishRequest>({
    mutationFn: payload => editDish(payload),
    onSuccess: async () => {
      setIngredientIdsToDelete([]);
      setVisible(true);
      setText('Your dish was edited sucessfully');
      refetchDish();
      refetchDishList();
    },
    onError: error => {
      setVisible(true);
      setText(`${error}`);
    },
  });

  const onSubmit = useCallback(
    (payload: EditDishForm) => {
      const fd = new FormData();
      if (img) {
        const photo = {
          uri: img.uri,
          name: img.fileName,
          type: img.type,
        };
        fd.append('photo', photo);
      }
      if (img === null) {
        fd.append('photo', null);
      }
      fd.append(
        'ingredients',
        JSON.stringify(
          payload.ingredients?.map(({ingredientId, ...props}) => ({
            ...props,
            id: ingredientId,
          })),
        ),
      );
      fd.append('name', payload.name);

      if (dishResponse?.id) {
        fd.append(
          'ingredientsIdsToDelete',
          JSON.stringify(ingredientIdsToDelete),
        );
        editDishMutation.mutate({
          id: dishResponse.id,
          dish: fd,
        });
      } else {
        addDishMutation.mutate(fd);
      }
    },
    [
      addDishMutation,
      editDishMutation,
      img,
      ingredientIdsToDelete,
      dishResponse.id,
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
    addDishMutation,
    editDishMutation,
    removeIngredient,
    isFormLoading: isDishLoading,
  };
};
