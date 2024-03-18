import React, {FC, PropsWithChildren} from 'react';
import {View} from 'react-native';
import {styles} from '.';

const Layout: FC<PropsWithChildren> = ({children}) => (
  <View style={styles.container}>{children}</View>
);

export default Layout;
