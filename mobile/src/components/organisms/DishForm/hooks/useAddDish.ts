import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {AddDish, addDishSchema} from '../validation';
import {useMutation} from '@tanstack/react-query';
import {DishRequest, Unit} from '../../../../api/dish/types';
import {addDish} from '../../../../api/dish';
import {useCallback, useState} from 'react';
import {useSnackbarVisibility} from '../../../atoms/SnackbarMessage/useSnackbarVisibility';
import {UseAddDishProps} from './types';
import {RouteProp, useFocusEffect, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../../../navigators/types';
import {Scenes} from '../../../../navigators/const';

export const useAddDish = ({img}: UseAddDishProps) => {
  const {params} = useRoute<RouteProp<RootStackParamList, Scenes.AddDish>>();

  const {visible, setVisible, handleOnDissmiss} = useSnackbarVisibility();
  const [text, setText] = useState('');

  const form = useForm<AddDish>({
    resolver: zodResolver(addDishSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      photo: '',
      ingredients: [
        {
          name: '',
          amount: 0,
          unit: Unit.g,
        },
      ],
    },
  });

  useFocusEffect(
    useCallback(() => {
      if (params) {
        form.setValue('name', params.name);
        params.ingredients.map((ingredient, index) => {
          form.setValue(`ingredients.${index}.name`, ingredient.name);
          form.setValue(`ingredients.${index}.amount`, ingredient.amount);
          form.setValue(`ingredients.${index}.unit`, ingredient.unit);
        });
      }
    }, [form, params]),
  );

  const mutation = useMutation<void, void, FormData>({
    mutationFn: payload => {
      return addDish(payload);
    },
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

  const onSubmit = (payload: DishRequest) => {
    const photo = {
      uri: img?.uri,
      name: img?.fileName,
      type: img?.type,
    };
    const fd = new FormData();
    fd.append('photo', photo);
    fd.append('ingredients', JSON.stringify(payload.ingredients));
    fd.append('name', payload.name);
    mutation.mutate(fd);
  };

  const onCancel = () => {
    form.reset();
  };

  return {
    text,
    form,
    mutation,
    onSubmit,
    onCancel,
    visible,
    handleOnDissmiss,
  };
};
