import {Scenes} from '../../../navigators/RootNavigation/const';
import {ICON_PATHS} from '../../../utils/icons';
import {ItemsProps} from '../Menu/type';

export const MENU_ITEMS: ItemsProps[] = [
  {
    sceneToNavigate: Scenes.Login,
    title: 'Log out',
    leadingIcon: ICON_PATHS.LOGOUT,
  },
];
