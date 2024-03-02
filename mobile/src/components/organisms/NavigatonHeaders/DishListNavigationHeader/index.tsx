import React, {memo} from 'react';
import {View} from 'react-native';
import {Badge} from 'react-native-paper';
import NavigationButton from '../../../molecules/NavigationButton';
import {Scenes} from '../../../../navigators/RootNavigation/const';
import {ICON_PATHS} from '../../../../utils/icons';
import styles from './styles';
import {useDishContext} from '../../../../common/contexts/DishContext/useDishContext';

const DishListNavigationHeader = () => {
  const {totalDishCount} = useDishContext();

  return (
    <View style={styles.container}>
      <NavigationButton
        sceneName={Scenes.AddDish}
        iconSource={ICON_PATHS.ADD_ICON}
      />
      <NavigationButton
        sceneName={Scenes.Basket}
        iconSource={ICON_PATHS.BASKET}
      />
      <Badge style={styles.badge}>{totalDishCount}</Badge>
    </View>
  );
};
export default memo(DishListNavigationHeader);
