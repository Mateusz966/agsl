import React, {FC} from 'react';
import {Card, Text} from 'react-native-paper';
import {memo} from 'react';
import {DishCardProps} from './types';
import {Pressable, View} from 'react-native';
import styles from './styles';
import Photo from '../../atoms/Photo';
import {ICON_PATHS} from '../../../utils/icons';
import {useDishListBasket} from '../../../common/hooks/Dish/useDishListBasket';
import DishCardPhoto from '../../../assets/DishCardPhoto';
import IconButton from '../../atoms/Buttons/IconButton';

const DishCard: FC<DishCardProps> = ({dish, onPressHandler}) => {
  const {addDishToBasket} = useDishListBasket();

  return (
    <Pressable onPress={onPressHandler}>
      <Card
        style={styles.cardBackgroundStyle}
        elevation={5}
        contentStyle={styles.cardContentStyle}>
        {dish.photo ? (
          <Photo uri={dish.photo} style={styles.photoStyle} />
        ) : (
          <View style={styles.photoStyle}>
            <DishCardPhoto />
          </View>
        )}
        <View style={styles.dishNameContainer}>
          <Text variant="bodyLarge" style={styles.textStyle}>
            {dish.name}
          </Text>
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
