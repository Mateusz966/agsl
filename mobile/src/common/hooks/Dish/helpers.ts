import {DishResponse, EditDishForm} from '../../../api/dish/types';
import {RootScenes} from '../../../navigators/RootNavigation/types';
import {DEFAULT_DISH_FORM_VALUE} from './const';
import {DishPhoto} from './types';

export const getDefaultDishFormValues = (
  sceneName: RootScenes,
  dishResponse?: DishResponse,
) =>
  dishResponse && sceneName === RootScenes.EditDish
    ? {
        id: dishResponse.id,
        name: dishResponse.name,
        ingredients: dishResponse.ingredients,
        photo: dishResponse.photo,
      }
    : DEFAULT_DISH_FORM_VALUE;

export const createFormData = (
  payload: EditDishForm,
  img?: DishPhoto,
  dishResponse?: DishResponse,
  ingredientIdsToDelete?: string[],
) => {
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
    fd.append('ingredientsIdsToDelete', JSON.stringify(ingredientIdsToDelete));
  }

  return fd;
};
