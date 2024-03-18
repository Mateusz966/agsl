import React, {memo} from 'react';
import {FlatList, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import useShoppingLists from 'common/hooks/ShoppingList/useShoppingLists';
import {useShoppingListContext} from 'common/contexts/ShoppingListContext/useShoppingListContext';
import {RootScenes, RootStackParamList} from 'navigators/RootNavigation';
import {TabScenes} from 'navigators/TabNavigation';
import {EmptyPageContent} from 'templates';
import {EmptyShoppingListPhoto} from 'assets';
import {ShoppingListCard} from 'molecules';
import {Button} from 'atoms';

const UserShoppingListsView = () => {
  const {shoppingListsResponse, areShoppingListsLoading} =
    useShoppingLists(true);
  const {setShoppingListId} = useShoppingListContext();
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();

  if (areShoppingListsLoading) {
    return <ActivityIndicator animating />;
  }

  return (
    <View>
      {shoppingListsResponse.length > 0 ? (
        <FlatList
          data={shoppingListsResponse
            .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
            .reverse()}
          renderItem={({item}) => (
            <ShoppingListCard
              createdAt={item.createdAt}
              onPressHandler={() => {
                setShoppingListId(item.id);
                navigate(RootScenes.ShoppingList);
              }}
            />
          )}
        />
      ) : (
        <EmptyPageContent
          fillerPhoto={<EmptyShoppingListPhoto />}
          headlineMedium="Create your first shopping list"
          headlineSmall="add your dishes to basket"
          actionElement={
            <Button onPress={() => navigate(TabScenes.TabBasket)}>
              Navigate to basket
            </Button>
          }
        />
      )}
    </View>
  );
};

export default memo(UserShoppingListsView);
