import {TabScenes} from '../../../navigators/TabNavigation/TabNavigation.types';
import {RootScenes} from '../../../navigators/RootNavigation/RootNavigation.types';

export type ScenesType = keyof typeof RootScenes | keyof typeof TabScenes;

export interface NavigationButtonProps {
  sceneName: ScenesType;
  iconSource: string;
}
