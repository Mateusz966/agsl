import React, {memo} from 'react';
import {FlatList, View} from 'react-native';
import useShoppingLists from '../../../common/hooks/ShoppingList/useShoppingLists';
import ShoppingListCard from '../../molecules/ShoppingListCard';
import {useShoppingListContext} from '../../../common/contexts/ShoppingListContext/useShoppingListContext';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigators/types';
import {Scenes} from '../../../navigators/const';

const UserShoppingListsView = () => {
  const {shoppingListsResponse} = useShoppingLists();
  const {setShoppingListId} = useShoppingListContext();
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View>
      <FlatList
        data={shoppingListsResponse}
        renderItem={({item}) => (
          <ShoppingListCard
            ingredients={item.generatedShoppingList}
            onPressHandler={() => {
              setShoppingListId(item.id);
              navigate(Scenes.ShoppingList);
            }}
          />
        )}
      />
    </View>
  );
};

export default memo(UserShoppingListsView);
