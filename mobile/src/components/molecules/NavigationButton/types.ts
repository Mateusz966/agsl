import {Scenes} from '../../../navigators/RootNavigation/const';

export type ScenesType = keyof typeof Scenes;

export interface NavigationButtonProps {
  sceneName: ScenesType;
  iconSource: string;
}
