import React from 'react';
import {Menu, MenuItemProps} from 'react-native-paper';
import {colors} from '../../../config/theme';

const MenuItem = (props: MenuItemProps) => (
  <Menu.Item
    theme={{colors: {onSurfaceVariant: colors.white, onSurface: colors.white}}}
    {...props}
  />
);

export default MenuItem;
