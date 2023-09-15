import {colors, components} from '../../../config/theme';
import {ButtonType, ButtonTypeDictionary, ButtonTypeStyle} from './types';

export const ButtonStyleDictionary: ButtonTypeDictionary<
  ButtonType,
  ButtonTypeStyle
> = {
  [ButtonType.Primary]: {
    style: components.button.primary,
    textColor: colors.white,
  },
  [ButtonType.Secondary]: {
    style: components.button.secondary,
    textColor: colors.primary,
  },
};
