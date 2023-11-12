import {Scenes} from '../../../navigators/DefaultNavigation/const';
import {ICON_PATHS} from '../../../utils/icons';
import {ItemsProps} from '../Menu/type';

export const MENU_ITEMS: ItemsProps[] = [
  {
    sceneToNavigate: Scenes.AddDish,
    title: 'Add dish',
    leadingIcon: ICON_PATHS.ADD_ICON,
  },
  {
    sceneToNavigate: Scenes.DishList,
    title: 'Dish list',
    leadingIcon: ICON_PATHS.LIST,
  },
  {
    sceneToNavigate: Scenes.Login,
    title: 'Log out',
    leadingIcon: ICON_PATHS.LOGOUT,
  },
];
