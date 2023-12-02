import React, {memo} from 'react';
import {FlatList, View} from 'react-native';
import {useDishContext} from '../../../common/contexts/DishContext/useDishContext';
import BasketElement from '../../molecules/BasketElement';
import styles from './styles';
import ActionButtonsContainer from '../../molecules/ActionButtonsContainer';
import {useMutateShoppingList} from '../../../common/hooks/ShoppingList/useMutateShoppingList';

const DishListBasket = () => {
  const {dishesList} = useDishContext();
  const {handleCreateShoppingList, handleResetBasket} = useMutateShoppingList();

  return (
    <View>
      <FlatList
        style={styles.listStyle}
        data={dishesList}
        renderItem={({item}) => (
          <BasketElement key={item.id} basketElement={item} />
        )}
      />
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
