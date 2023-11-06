import {zodResolver} from '@hookform/resolvers/zod';
import {useFieldArray, useForm} from 'react-hook-form';
import {AddDish, addDishSchema} from '../validation';
import {useMutation} from '@tanstack/react-query';
import {DishRequest} from '../../../../api/dish/types';
import {addDish, editDish} from '../../../../api/dish';
import {useCallback} from 'react';
import {RouteProp, useFocusEffect, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../../../navigators/types';
import {Scenes} from '../../../../navigators/const';
import {useSnackbarContext} from '../../../atoms/SnackbarMessage/useSnackbarContext';
import {EditDishRequest, UseMutateDishProps} from './types';
import {DEFAULT_DISH_FORM_VALUE} from './const';

export const useMutateDish = ({img}: UseMutateDishProps) => {
  const {params} = useRoute<RouteProp<RootStackParamList, Scenes.AddDish>>();
  const {setText, setVisible} = useSnackbarContext();

  const form = useForm<AddDish>({
    resolver: zodResolver(addDishSchema),
    mode: 'onChange',
    defaultValues: DEFAULT_DISH_FORM_VALUE,
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

  const editDishMutation = useMutation<void, void, EditDishRequest>({
    mutationFn: payload => editDish(payload.id, payload.dishData),
    onSuccess: () => {
      setVisible(true);
      setText('Your dish was edited sucessfully');
    },
    onError: error => {
      setVisible(true);
      setText(`${error}`);
    },
  });

  const onSubmit = useCallback(
    (payload: DishRequest) => {
      const fd = new FormData();
      if (payload.photo) {
        const photo = {
          uri: img?.uri,
          name: img?.fileName,
          type: img?.type,
        };
        fd.append('photo', photo);
      }
      fd.append('ingredients', JSON.stringify(payload.ingredients));
      fd.append('name', payload.name);
      addDishMutation.mutate(fd);
    },
    [addDishMutation, img?.fileName, img?.type, img?.uri],
  );

  const onCancel = () => {
    form.reset();
  };

  useFocusEffect(
    useCallback(() => {
      if (params) {
        form.setValue('name', params.name);
        params.ingredients.map((ingredient, index) => {
          if (index === 0) {
            form.setValue(`ingredients.${index}.name`, ingredient.name);
            form.setValue(`ingredients.${index}.amount`, ingredient.amount);
            form.setValue(`ingredients.${index}.unit`, ingredient.unit);
          } else {
            append({
              name: ingredient.name,
              amount: ingredient.amount,
              unit: ingredient.unit,
            });
          }
        });
      }
    }, [append, form, params]),
  );

  return {
    append,
    remove,
    fields,
    form,
    onSubmit,
    onCancel,
    addDishMutation,
    editDishMutation,
  };
};
