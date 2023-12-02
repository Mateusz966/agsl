import React, {memo, useState} from 'react';
import {FlatList, View} from 'react-native';

import ShoppingListElement from '../../molecules/ShoppingListElement';
import {Ingredient} from '../../../api/dish/types';
import {colors} from '../../../config/theme';
import useShoppingLists from '../../../common/hooks/ShoppingList/useShoppingList';

const ShoppingListView = () => {
  const [isBought, setIsBought] = useState(false);
  const {shoppingListsResponse} = useShoppingLists();
  const data = [
    {name: 'Arbuz', amount: 10, unit: 'kg'},
    {name: 'Arbuz', amount: 10, unit: 'kg'},
    {name: 'Arbuz', amount: 10, unit: 'kg'},
    {name: 'Arbuz', amount: 10, unit: 'kg'},
  ] as Ingredient[];

  return (
    <View style={{height: '100%'}}>
      <FlatList
        style={{marginTop: 20}}
        data={shoppingListsResponse}
        renderItem={({item, index}) => (
          <ShoppingListElement
            key={item.id}
            index={index + 1}
            ingredient={item}
            isBought={isBought}
            setIsBought={setIsBought}
          />
        )}
      />
    </View>
  );
};
export default memo(ShoppingListView);
