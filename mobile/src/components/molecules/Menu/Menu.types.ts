import {MenuItemProps} from 'react-native-paper';
import {RootScenes} from '../../../navigators/RootNavigation/RootNavigation.types';

export interface ItemsProps extends MenuItemProps {
  sceneToNavigate: RootScenes;
}

export interface MenuProps {
  visible: boolean;
  menuItems: ItemsProps[];
}
