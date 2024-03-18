import React, {FC, memo} from 'react';
import {View} from 'react-native';
import {Card, IconButton, Text} from 'react-native-paper';
import {useDishListBasket} from 'common/hooks/Dish/useDishListBasket';
import {ICON_PATHS, DishCardPhoto} from 'assets';
import {Photo} from 'atoms';
import {styles, BasketElementProps} from '.';

const BasketElement: FC<BasketElementProps> = ({basketElement}) => {
  const {addDishToBasket, removeDishFromBasket} = useDishListBasket();

  return (
    <Card
      style={styles.cardBackgroundStyle}
      elevation={5}
      contentStyle={styles.cardContentStyle}>
      {basketElement.photo ? (
        <Photo uri={basketElement.photo} style={styles.photoStyle} />
      ) : (
        <View style={styles.photoStyle}>
          <DishCardPhoto />
        </View>
      )}
      <View style={styles.dishNameContainer}>
        <Text variant="bodyLarge" style={styles.textStyle}>
          {basketElement.name}
        </Text>
        <View style={styles.buttonsContainer}>
          <IconButton
            icon={ICON_PATHS.MINUS}
            style={styles.iconStyle}
            onPress={() => removeDishFromBasket(basketElement)}
          />
          <Text variant="bodyLarge" style={styles.countTextStyle}>
            {basketElement.count}
          </Text>
          <IconButton
            icon={ICON_PATHS.ADD_FILLED}
            style={styles.iconStyle}
            onPress={() => addDishToBasket(basketElement)}
          />
        </View>
      </View>
    </Card>
  );
};

export default memo(BasketElement);
