import React, {memo} from 'react';
import {FlatList, View} from 'react-native';
import {Text, ActivityIndicator} from 'react-native-paper';
import useShoppingList from 'common/hooks/ShoppingList/useShoppingList';
import {useShoppingListForm} from 'common/hooks/ShoppingList/useShoppingListForm';
import {Button} from 'atoms';
import {ControlledCheckboxInput, ControlledTextInput} from 'molecules';
import {styles} from '.';

const ShoppingListView = () => {
  const {shoppingListResponse, isShoppingListLoading} = useShoppingList(true);
  const {form, handleEditShoppingList} = useShoppingListForm();

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
          <View style={styles.itemContainer} key={item.ingredientId}>
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
      <Button
        style={styles.button}
        onPress={handleSubmit(handleEditShoppingList)}>
        Save changes
      </Button>
    </View>
  );
};
export default memo(ShoppingListView);
