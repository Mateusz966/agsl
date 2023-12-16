import React, {FC} from 'react';
import {Text} from 'react-native-paper';
import {memo} from 'react';

import styles from './styles';
import {ShoppingListCardProps} from './types';
import {Pressable, View} from 'react-native';

const ShoppingListCard: FC<ShoppingListCardProps> = ({
  createdAt,
  onPressHandler,
}) => {
  const createdAtDate = new Date(createdAt);

  return (
    <Pressable style={styles.itemContainer} onPress={onPressHandler}>
      <View style={styles.dishNameContainer}>
        <Text variant="titleMedium">{'Created at:'}</Text>
        <Text variant="titleSmall" style={{marginLeft: 40}}>
          {createdAtDate.toLocaleDateString()}
        </Text>
        <Text variant="titleSmall">{`${createdAtDate.toLocaleTimeString(
          'pl',
        )}`}</Text>
      </View>
    </Pressable>
  );
};

export default memo(ShoppingListCard);
