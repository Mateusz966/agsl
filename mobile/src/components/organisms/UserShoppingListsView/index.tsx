import React, {memo} from 'react';
import {FlatList, View} from 'react-native';
import useShoppingLists from '../../../common/hooks/ShoppingList/useShoppingLists';
import ShoppingListCard from '../../molecules/ShoppingListCard';
import {useShoppingListContext} from '../../../common/contexts/ShoppingListContext/useShoppingListContext';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {
  RootScenes,
  RootStackParamList,
} from '../../../navigators/RootNavigation/types';
import EmptyPageContent from '../../templates/EmptyPageContent';
import EmptyShoppingListPhoto from '../../../assets/EmptyShoppingListPhoto';
import TextButton from '../../atoms/Buttons/TextButton';
import {ActivityIndicator} from 'react-native-paper';
import {TabScenes} from '../../../navigators/BottomNavigation/types';

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
            <TextButton onPress={() => navigate(TabScenes.TabBasket)}>
              Navigate to basket
            </TextButton>
          }
        />
      )}
    </View>
  );
};

export default memo(UserShoppingListsView);
