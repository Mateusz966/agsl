import {Scenes} from '../../../navigators/const';

export type ScenesType = keyof typeof Scenes;

export interface NavigationButtonProps {
  sceneName: ScenesType;
  iconSource: string;
}
