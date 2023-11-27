import React, {FC} from 'react';
import {Card, IconButton, Text} from 'react-native-paper';
import {memo} from 'react';

import {useDishListBasket} from '../../../common/hooks/Dish/useDishListBasket';
import styles from './styles';
import {BasketElementProps} from './types';
import Photo from '../../atoms/Photo';
import {View} from 'react-native';
import Message from '../../atoms/Message';
import {ICON_PATHS} from '../../../utils/icons';

const BasketElement: FC<BasketElementProps> = ({basketElement}) => {
  const {addDishToBasket, removeDishFromBasket} = useDishListBasket();

  return (
    <Card
      style={styles.cardBackgroundStyle}
      elevation={5}
      contentStyle={styles.cardContentStyle}>
      <Photo
        uri={
          basketElement.photo ??
          'C:/Users/victo/OneDrive/Pulpit/mine-projects/agsl/mobile/src/assets/icons/add.png'
        }
        style={styles.photoStyle}
      />
      <View style={styles.dishNameContainer}>
        <Message style={styles.textStyle} message={basketElement.name} />
        <View style={styles.buttonsContainer}>
          <IconButton
            icon={ICON_PATHS.MINUS}
            style={styles.iconStyle}
            onPress={() => removeDishFromBasket(basketElement)}
          />
          <Text style={styles.countTextStyle}>{basketElement.count}</Text>
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
