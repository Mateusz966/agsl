import {RootScenes} from '../../../navigators/RootNavigation/RootNavigation.types';
import {ICON_PATHS} from '../../../assets/icons';
import {ItemsProps} from '../Menu/Menu.types';

export const MENU_ITEMS: ItemsProps[] = [
  {
    sceneToNavigate: RootScenes.Login,
    title: 'Log out',
    leadingIcon: ICON_PATHS.LOGOUT,
  },
];
