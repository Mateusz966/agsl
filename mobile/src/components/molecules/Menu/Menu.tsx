import React, {FC} from 'react';
import {View} from 'react-native';
import useNavigateToScene from 'navigators/RootNavigation/useNavigateToScene';
import {MenuItem} from 'atoms';
import {MenuProps, styles} from '.';

const Menu: FC<MenuProps> = ({visible, menuItems}) => {
  const {handleNavigate} = useNavigateToScene();

  return visible ? (
    <View style={styles.container}>
      {menuItems.map((props, index) => (
        <MenuItem
          key={`menuItem-${index}`}
          onPress={() => handleNavigate(props.sceneToNavigate)}
          {...props}
        />
      ))}
    </View>
  ) : (
    <></>
  );
};
export default Menu;
