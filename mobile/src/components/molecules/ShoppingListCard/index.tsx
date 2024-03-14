import React, {FC} from 'react';
import {List} from 'react-native-paper';
import {memo} from 'react';

import {ShoppingListCardProps} from './types';
import {Pressable} from 'react-native';

const ShoppingListCard: FC<ShoppingListCardProps> = ({
  createdAt,
  onPressHandler,
}) => {
  const parsedDate = new Date(createdAt).toLocaleDateString('pl');

  return (
    <Pressable onPress={onPressHandler}>
      <List.Item
        title="Shopping list"
        description={parsedDate}
        left={props => <List.Icon {...props} icon="cart" />}
      />
    </Pressable>
  );
};

export default memo(ShoppingListCard);
