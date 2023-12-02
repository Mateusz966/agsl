import React, {FC} from 'react';
import {memo} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Badge, Checkbox, Text} from 'react-native-paper';
import {ShoppingListElementProps} from './types';

const ShoppingListElement: FC<ShoppingListElementProps> = ({
  index,
  ingredient,
  isBought,
  setIsBought,
}) => {
  return (
    <View style={styles.container}>
      <Badge style={styles.badgeStyle}>{index}</Badge>
      <Text style={styles.name}>{ingredient.name}</Text>
      <Text
        style={styles.amount}>{`${ingredient.amount} ${ingredient.unit}`}</Text>
      <Checkbox
        onPress={() => setIsBought(!isBought)}
        status={isBought ? 'checked' : 'unchecked'}
      />
    </View>
  );
};
export default memo(ShoppingListElement);
