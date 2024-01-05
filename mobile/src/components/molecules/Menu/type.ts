import {MenuItemProps} from 'react-native-paper';
import {Scenes} from '../../../navigators/RootNavigation/const';

export interface ItemsProps extends MenuItemProps {
  sceneToNavigate: Scenes;
}

export interface MenuProps {
  visible: boolean;
  menuItems: ItemsProps[];
}
