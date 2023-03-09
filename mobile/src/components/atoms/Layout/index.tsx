import React, {FC, PropsWithChildren} from 'react';
import {View} from 'react-native';
import {styles} from './styles';

export const Layout: FC<PropsWithChildren> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};
