import React, {memo} from 'react';
import {FlatList, View} from 'react-native';
import {DishCard} from 'molecules';

import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useDishContext} from 'common/contexts/DishContext/useDishContext';
import {RootScenes, RootStackParamList} from 'navigators/RootNavigation';
import {EmptyPageContent} from 'templates';
import {EmptyDishListPhoto} from 'assets';
import {Button} from 'atoms';
import {useDishList} from '.';

const DishListView = () => {
  const {setDishId} = useDishContext();
  const {dishListResponse, isDishListLoading, refetchDishList} = useDishList();
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View>
      {dishListResponse.length > 0 ? (
        <FlatList
          data={dishListResponse}
          onRefresh={refetchDishList}
          refreshing={isDishListLoading}
          renderItem={({item}) => (
            <DishCard
              key={item.id}
              dish={item}
              onPressHandler={() => {
                setDishId(item.id);
                navigate(RootScenes.EditDish);
              }}
            />
          )}
        />
      ) : (
        <EmptyPageContent
          fillerPhoto={<EmptyDishListPhoto />}
          headlineMedium="Add your meal"
          headlineSmall="and create your dish list"
          actionElement={
            <Button onPress={() => navigate(RootScenes.AddDish)}>
              Add dish
            </Button>
          }
        />
      )}
    </View>
  );
};
export default memo(DishListView);
