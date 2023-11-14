import {zodResolver} from '@hookform/resolvers/zod';
import {useFieldArray, useForm} from 'react-hook-form';
import {AddDish, addDishSchema} from '../validation';
import {useMutation} from '@tanstack/react-query';
import {DishRequest} from '../../../../api/dish/types';
import {addDish, editDish} from '../../../../api/dish';
import {useCallback, useMemo} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../../../navigators/types';
import {Scenes} from '../../../../navigators/const';
import {useSnackbarContext} from '../../../atoms/SnackbarMessage/useSnackbarContext';
import {EditDishRequest, UseMutateDishProps} from './types';
import {DEFAULT_DISH_FORM_VALUE} from './const';
import {useDishContext} from './DishContext/useDishContext';
import {AxiosError} from 'axios';

export const useMutateDish = ({
  img,
  idsToDelete,
  setIdsToDelete,
}: UseMutateDishProps) => {
  const {params} = useRoute<RouteProp<RootStackParamList, Scenes.AddDish>>();
  const {setText, setVisible} = useSnackbarContext();
  const {setDishId} = useDishContext();

  const paramsDishValue = useMemo(
    () =>
      params
        ? {
            name: params.name,
            ingredients: params.ingredients,
            photo: params.photo,
          }
        : DEFAULT_DISH_FORM_VALUE,
    [params],
  );

  const form = useForm<AddDish>({
    resolver: zodResolver(addDishSchema),
    mode: 'onChange',
    defaultValues: paramsDishValue,
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

  const editDishMutation = useMutation<void, AxiosError, EditDishRequest>({
    mutationFn: payload => editDish(payload),
    onSuccess: async () => {
      setDishId(params?.id ?? '');
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
    (payload: DishRequest) => {
      const fd = new FormData();
      if (img) {
        const photo = {
          uri: img.uri,
          name: img.fileName,
          type: img.type,
        };
        fd.append('photo', photo);
      }
      fd.append('ingredients', JSON.stringify(payload.ingredients));
      fd.append('name', payload.name);
      fd.append('ingredientsIdsToDelete', JSON.stringify(idsToDelete));

      if (params?.id) {
        editDishMutation.mutate({
          id: params.id,
          dish: fd,
        });
      } else {
        addDishMutation.mutate(fd);
      }
    },
    [addDishMutation, editDishMutation, idsToDelete, img, params?.id],
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
    params,
  };
};
