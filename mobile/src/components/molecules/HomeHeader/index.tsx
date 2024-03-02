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
import {useAuthContext} from '../../../common/contexts/AuthContext/useAuthContext';

const HomeHeader = () => {
  const {menuVisible, handleMenuVisiblity} = useMenuVisibilty();
  const {authData} = useAuthContext();

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
      <Text style={styles.text}>{`Hello, ${authData.nickName}`}</Text>
    </View>
  );
};

export default HomeHeader;
