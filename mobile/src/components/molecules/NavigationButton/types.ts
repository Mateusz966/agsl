import {Scenes} from '../../../navigators/DefaultNavigation/const';

export type ScenesType = keyof typeof Scenes;

export interface NavigationButtonProps {
  sceneName: ScenesType;
  iconSource: string;
}
