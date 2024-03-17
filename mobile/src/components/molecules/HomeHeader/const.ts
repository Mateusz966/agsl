import {RootScenes} from '../../../navigators/RootNavigation/types';
import {ICON_PATHS} from '../../../utils/icons';
import {ItemsProps} from '../Menu/type';

export const MENU_ITEMS: ItemsProps[] = [
  {
    sceneToNavigate: RootScenes.Login,
    title: 'Log out',
    leadingIcon: ICON_PATHS.LOGOUT,
  },
];
