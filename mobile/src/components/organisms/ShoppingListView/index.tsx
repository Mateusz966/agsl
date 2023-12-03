import React, {memo, useState} from 'react';
import {FlatList, View} from 'react-native';

import ShoppingListElement from '../../molecules/ShoppingListElement';
import {Ingredient} from '../../../api/dish/types';
import {colors} from '../../../config/theme';
import useShoppingLists from '../../../common/hooks/ShoppingList/useShoppingList';
import {useShoppingListContext} from '../../../common/contexts/ShoppingListContext/useShoppingListContext';
import useShoppingList from '../../../common/hooks/ShoppingList/useShoppingList';
import TextButton from '../../atoms/Buttons/TextButton';
import {useMutateShoppingList} from '../../../common/hooks/ShoppingList/useMutateShoppingList';

const ShoppingListView = () => {
  const {shoppingListResponse} = useShoppingList();
  const {form, handleEditShoppingList} = useMutateShoppingList();

  const {
    handleSubmit,
    control,
    formState: {errors},
  } = form;

  return (
    <View style={{height: '100%'}}>
      <FlatList
        style={{marginTop: 20}}
        data={shoppingListResponse?.generatedShoppingList}
        renderItem={({item, index}) => (
          <ShoppingListElement key={item.id} index={index} ingredient={item} />
        )}
      />
      <TextButton onPress={handleSubmit(handleEditShoppingList)}>
        Save changes
      </TextButton>
    </View>
  );
};
export default memo(ShoppingListView);
