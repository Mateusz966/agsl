import {ComponentType} from 'react';

export type RouteType = {
  key: string;
  title: string;
};

export type SceneToRenderType = {[key: string]: ComponentType<unknown>};
export type DisplayType = 'bottom' | 'top';

export interface TabProps {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  scenesToRender: SceneToRenderType;
  routesToDisplay: RouteType[];
  displayType: DisplayType;
}
