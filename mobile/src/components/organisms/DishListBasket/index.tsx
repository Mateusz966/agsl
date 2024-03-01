import React, {memo} from 'react';
import {FlatList, View} from 'react-native';
import {useDishContext} from '../../../common/contexts/DishContext/useDishContext';
import BasketElement from '../../molecules/BasketElement';
import styles from './styles';
import ActionButtonsContainer from '../../molecules/ActionButtonsContainer';
import ShoppingListPhoto from '../../../assets/ShoppingListPhoto';
import {useShoppingListForm} from '../../../common/hooks/ShoppingList/useShoppingListForm';
import EmptyPageContent from '../../templates/EmptyPageContent';

const DishListBasket = () => {
  const {dishesList} = useDishContext();
  const {handleCreateShoppingList, handleResetBasket} = useShoppingListForm();

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
      <ActionButtonsContainer
        primaryButtonProps={{
          text: 'Create shopping list',
          onPress: () => handleCreateShoppingList(),
        }}
        secondaryButtonProps={{
          text: 'Reset basket',
          onPress: () => handleResetBasket(),
        }}
        containerStyle={styles.actionButtonsContainer}
      />
    </View>
  );
};
export default memo(DishListBasket);
