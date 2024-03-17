import React, {memo} from 'react';
import {View} from 'react-native';
import {Badge} from 'react-native-paper';
import NavigationButton from '../../../molecules/NavigationButton';
import {ICON_PATHS} from '../../../../utils/icons';
import styles from './styles';
import {useDishContext} from '../../../../common/contexts/DishContext/useDishContext';
import {RootScenes} from '../../../../navigators/RootNavigation/types';

const DishListNavigationHeader = () => {
  const {totalDishCount} = useDishContext();

  return (
    <View style={styles.container}>
      <NavigationButton
        sceneName={RootScenes.AddDish}
        iconSource={ICON_PATHS.ADD_ICON}
      />
      <NavigationButton
        sceneName={RootScenes.Basket}
        iconSource={ICON_PATHS.BASKET}
      />
      <Badge style={styles.badge}>{totalDishCount}</Badge>
    </View>
  );
};
export default memo(DishListNavigationHeader);
