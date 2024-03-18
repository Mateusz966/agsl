import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useAuthContext} from 'common/contexts/AuthContext/useAuthContext';
import {ICON_PATHS} from 'assets';
import {colors} from 'theme';
import {Menu} from 'molecules';
import {IconButton} from 'atoms';
import {MENU_ITEMS, styles, useMenuVisibility} from '.';

const HomeHeader = () => {
  const {menuVisible, handleMenuVisiblity} = useMenuVisibility();
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
