import {TabScenes} from '../../../navigators/BottomNavigation/types';
import {RootScenes} from '../../../navigators/RootNavigation/types';

export type ScenesType = keyof typeof RootScenes | keyof typeof TabScenes;

export interface NavigationButtonProps {
  sceneName: ScenesType;
  iconSource: string;
}
