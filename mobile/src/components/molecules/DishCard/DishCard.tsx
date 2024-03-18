import React, {FC, memo} from 'react';
import {Card, Text} from 'react-native-paper';
import {Pressable, View} from 'react-native';
import {useDishListBasket} from 'common/hooks/Dish/useDishListBasket';
import {ICON_PATHS, DishCardPhoto} from 'assets';
import {IconButton, Photo} from 'atoms';
import {DishCardProps, styles} from '.';

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
