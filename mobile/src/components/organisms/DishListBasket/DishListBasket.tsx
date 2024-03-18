import React, {memo} from 'react';
import {FlatList, View} from 'react-native';
import {useDishContext} from 'common/contexts/DishContext/useDishContext';
import {ShoppingListPhoto} from 'assets';
import {useShoppingListForm} from 'common/hooks/ShoppingList/useShoppingListForm';
import {EmptyPageContent} from 'templates';
import {ActionButtonsContainer, BasketElement} from 'molecules';
import {styles} from '.';

const DishListBasket = () => {
  const {dishesList} = useDishContext();
  const {handleCreateShoppingList, handleResetBasket} = useShoppingListForm();

  const hideBtnContainer = dishesList.length === 0;

  return (
    <View>
      {dishesList.length > 0 ? (
        <FlatList
          style={styles.listStyle}
          data={dishesList}
          renderItem={({item}) => (
            <BasketElement key={item.id} basketElement={item} />
          )}
        />
      ) : (
        <EmptyPageContent
          fillerPhoto={<ShoppingListPhoto />}
          headlineMedium="Add dishes to the basket"
          headlineSmall="and create your shopping list"
        />
      )}
      {!hideBtnContainer && (
        <ActionButtonsContainer
          primaryButtonProps={{
            text: 'Create shopping list',
            onPress: handleCreateShoppingList,
          }}
          secondaryButtonProps={{
            text: 'Reset basket',
            onPress: handleResetBasket,
          }}
        />
      )}
    </View>
  );
};
export default memo(DishListBasket);
