import React, {FC} from 'react';
import {memo} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Badge, Checkbox, Text} from 'react-native-paper';
import {ShoppingListElementProps} from './types';
import ControlledCheckboxInput from '../ControlledInputs/ControlledCheckboxInput';
import {useMutateShoppingList} from '../../../common/hooks/ShoppingList/useMutateShoppingList';
import ControlledTextInput from '../ControlledInputs/ControlledTextInput';

const ShoppingListElement: FC<ShoppingListElementProps> = ({
  ingredient,
  index,
}) => {
  const {handleCreateShoppingList, form} = useMutateShoppingList({ingredient});

  return (
    <View style={styles.container}>
      <ControlledTextInput control={form.control} name={'listId'} />
      <ControlledTextInput
        control={form.control}
        name={`shoppingListElement.${index}.ingredientId`}
        style={styles.hiddenInput}
      />
      <ControlledCheckboxInput
        control={form.control}
        name={`shoppingListElement.${index}.isBought`}
        style={styles.hiddenInput}
      />
      <Text style={styles.name}>{ingredient.name}</Text>
      <Text
        style={styles.amount}>{`${ingredient.amount} ${ingredient.unit}`}</Text>
    </View>
  );
};
export default memo(ShoppingListElement);
