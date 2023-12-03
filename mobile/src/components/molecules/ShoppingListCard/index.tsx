import React, {FC} from 'react';
import {Card, Text} from 'react-native-paper';
import {memo} from 'react';

import styles from './styles';
import {ShoppingListCardProps} from './types';
import {Pressable, View} from 'react-native';
import ShoppingListPhoto from '../../../assets/ShoppingListPhoto';

const ShoppingListCard: FC<ShoppingListCardProps> = ({
  ingredients,
  onPressHandler,
}) => {
  return (
    <Pressable onPress={onPressHandler}>
      <Card
        style={styles.cardBackgroundStyle}
        elevation={5}
        contentStyle={styles.cardContentStyle}>
        <View style={styles.photoStyle}>
          <ShoppingListPhoto />
        </View>
        <View style={styles.dishNameContainer}>
          {ingredients.map(ingredient => (
            <Text key={ingredient.id} style={styles.textStyle}>
              {ingredient.name}
            </Text>
          ))}
        </View>
      </Card>
    </Pressable>
  );
};

export default memo(ShoppingListCard);
