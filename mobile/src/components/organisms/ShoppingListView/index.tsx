import React, {memo} from 'react';
import {FlatList, View} from 'react-native';
import {Text} from 'react-native-paper';

import useShoppingList from '../../../common/hooks/ShoppingList/useShoppingList';
import TextButton from '../../atoms/Buttons/TextButton';
import {useMutateShoppingList} from '../../../common/hooks/ShoppingList/useMutateShoppingList';
import styles from './styles';
import {ActivityIndicator} from 'react-native-paper';
import ControlledTextInput from '../../molecules/ControlledInputs/ControlledTextInput';
import ControlledCheckboxInput from '../../molecules/ControlledInputs/ControlledCheckboxInput';

const ShoppingListView = () => {
  const {shoppingListResponse, isShoppingListLoading} = useShoppingList();
  const {form, handleEditShoppingList} = useMutateShoppingList();

  const {handleSubmit} = form;

  return isShoppingListLoading ? (
    <View style={styles.loader}>
      <ActivityIndicator size={50} />
    </View>
  ) : (
    <View style={styles.container}>
      <FlatList
        style={styles.flatlist}
        data={shoppingListResponse?.generatedShoppingList}
        renderItem={({item, index}) => (
          <View style={styles.itemContainer} key={item.id}>
            <ControlledTextInput
              control={form.control}
              name={'listId'}
              style={styles.hiddenInput}
            />
            <ControlledTextInput
              control={form.control}
              name={`shoppingListItems.${index}.ingredientId`}
              style={styles.hiddenInput}
            />
            <ControlledCheckboxInput
              control={form.control}
              style={styles.checkbox}
              name={`shoppingListItems.${index}.isBought`}
            />
            <Text variant="bodyLarge" style={styles.name}>
              {item.name}
            </Text>
            <Text variant="bodyMedium">{`${item.amount} ${item.unit}`}</Text>
          </View>
        )}
      />
      <TextButton
        style={styles.button}
        onPress={handleSubmit(handleEditShoppingList)}>
        Save changes
      </TextButton>
    </View>
  );
};
export default memo(ShoppingListView);
