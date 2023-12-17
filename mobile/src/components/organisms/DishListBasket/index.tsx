import React, {memo} from 'react';
import {FlatList, View} from 'react-native';
import {useDishContext} from '../../../common/contexts/DishContext/useDishContext';
import BasketElement from '../../molecules/BasketElement';
import styles from './styles';
import ActionButtonsContainer from '../../molecules/ActionButtonsContainer';
import {useMutateShoppingList} from '../../../common/hooks/ShoppingList/useMutateShoppingList';
import ShoppingListPhoto from '../../../assets/ShoppingListPhoto';
import {Text} from 'react-native-paper';

const DishListBasket = () => {
  const {dishesList} = useDishContext();
  const {handleCreateShoppingList, handleResetBasket} = useMutateShoppingList();

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
        <>
          <View style={styles.emptyBasketContainer}>
            <ShoppingListPhoto />
          </View>
          <View style={styles.emptyBasket}>
            <Text style={styles.headlineMedium} variant="headlineMedium">
              Add dishes to the basket
            </Text>
            <Text style={styles.headlineSmall} variant="headlineSmall">
              and create your shopping list
            </Text>
          </View>
        </>
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
