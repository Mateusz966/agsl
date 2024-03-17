import {View} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import MenuItem from '../../atoms/MenuItem';
import {MenuProps} from './type';
import useNavigateToScene from './useNavigateToScene';

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
