import React, {memo} from 'react';
import {ScrollView} from 'react-native';
import DishCard from '../../molecules/DishCard';

import useDishList from './useDishList';
import {ActivityIndicator} from 'react-native-paper';

const DishList = () => {
  const {response, navigateToDishForm, isLoading} = useDishList();

  return (
    <ScrollView>
      {isLoading ? (
        <ActivityIndicator animating size={'large'} />
      ) : (
        response.map(res => (
          <DishCard
            key={res.id}
            dishName={res.name}
            onPressHandler={() => navigateToDishForm(res)}
          />
        ))
      )}
    </ScrollView>
  );
};
export default memo(DishList);
