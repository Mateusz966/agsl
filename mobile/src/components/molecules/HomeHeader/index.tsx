import {View} from 'react-native';
import {styles} from './styles';
import React from 'react';
import {Text} from 'react-native-paper';
import IconButton from '../../atoms/Buttons/IconButton';
import {ICON_PATHS} from '../../../utils/icons';
import {colors} from '../../../config/theme';
import Menu from '../Menu';
import {MENU_ITEMS} from './const';
import useMenuVisibilty from './useMenuVisibility';

const HomeHeader = () => {
  const {menuVisible, handleMenuVisiblity} = useMenuVisibilty();
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <IconButton
          icon={ICON_PATHS.USER}
          iconColor={colors.primaryButton}
          mode="outlined"
          containerColor={colors.white}
          onPress={handleMenuVisiblity}
        />
        <Menu menuItems={MENU_ITEMS} visible={menuVisible} />
      </View>
      <Text style={styles.text}>Hello, Vix</Text>
    </View>
  );
};

export default HomeHeader;
