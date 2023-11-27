import React, {FC} from 'react';
import {Card} from 'react-native-paper';
import {memo} from 'react';
import Message from '../../atoms/Message';
import {DishCardProps} from './types';
import {Pressable, View} from 'react-native';
import styles from './styles';
import Photo from '../../atoms/Photo';
import {IconButton} from '../../atoms';
import {ICON_PATHS} from '../../../utils/icons';
import {useDishListBasket} from '../../../common/hooks/Dish/useDishListBasket';

const DishCard: FC<DishCardProps> = ({dish, onPressHandler}) => {
  const {addDishToBasket} = useDishListBasket();

  return (
    <Pressable onPress={onPressHandler}>
      <Card
        style={styles.cardBackgroundStyle}
        elevation={5}
        contentStyle={styles.cardContentStyle}>
        <Photo
          uri={
            dish.photo ??
            'C:/Users/victo/OneDrive/Pulpit/mine-projects/agsl/mobile/src/assets/icons/add.png'
          }
          style={styles.photoStyle}
        />
        <View style={styles.dishNameContainer}>
          <Message style={styles.textStyle} message={dish.name} />
          <IconButton
            icon={ICON_PATHS.ADD_TO_BASKET}
            onPress={() => addDishToBasket(dish)}
          />
        </View>
      </Card>
    </Pressable>
  );
};

export default memo(DishCard);
