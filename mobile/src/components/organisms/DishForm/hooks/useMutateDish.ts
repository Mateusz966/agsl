import {zodResolver} from '@hookform/resolvers/zod';
import {useFieldArray, useForm} from 'react-hook-form';
import {AddDish, addDishSchema} from '../validation';
import {useMutation} from '@tanstack/react-query';
import {EditDishForm} from '../../../../api/dish/types';
import {addDish, editDish} from '../../../../api/dish';
import {useCallback, useMemo, useState} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../../../navigators/types';
import {Scenes} from '../../../../navigators/const';
import {useSnackbarContext} from '../../../atoms/SnackbarMessage/useSnackbarContext';
import {EditDishRequest, UseMutateDishProps} from './types';
import {DEFAULT_DISH_FORM_VALUE} from './const';
import {AxiosError} from 'axios';
import useDish from './useDish';

export const useMutateDish = ({img}: UseMutateDishProps) => {
  const {setText, setVisible} = useSnackbarContext();
  const {response} = useDish();
  const [idsToDelete, setIdsToDelete] = useState<string[]>([]);
  const responseDishValue = useMemo(
    () =>
      response
        ? {
            name: response.name,
            ingredients: response.ingredients,
            photo: response.photo,
          }
        : DEFAULT_DISH_FORM_VALUE,
    [response],
  );

  console.log(response?.ingredients, 'dishVal');

  const form = useForm<AddDish>({
    resolver: zodResolver(addDishSchema),
    mode: 'onChange',
    defaultValues: responseDishValue,
  });

  const {append, fields, remove} = useFieldArray({
    control: form.control,
    name: 'ingredients',
  });

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
      setIdsToDelete(prevState => [ingredientId, ...prevState]);
    }
    remove(index);
  };

  const editDishMutation = useMutation<void, AxiosError, EditDishRequest>({
    mutationFn: payload => editDish(payload),
    onSuccess: async () => {
      setIdsToDelete([]);
      setVisible(true);
      setText('Your dish was edited sucessfully');
    },
    onError: error => {
      console.log(error.response, 'error');
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
      fd.append('ingredientsIdsToDelete', JSON.stringify(idsToDelete));

      if (response?.id) {
        editDishMutation.mutate({
          id: response.id,
          dish: fd,
        });
      } else {
        addDishMutation.mutate(fd);
      }
    },
    [addDishMutation, editDishMutation, idsToDelete, img, response?.id],
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
    response,
    removeIngredient,
  };
};
