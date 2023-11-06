import React, {memo} from 'react';
import {ScrollView} from 'react-native';
import DishCard from '../../molecules/DishCard';

import useDishList from './useDishList';

const DishList = () => {
  const {response, navigateToDishForm} = useDishList();

  return (
    <ScrollView>
      {response.map(res => (
        <DishCard
          key={res.id}
          dishName={res.name}
          onPressHandler={() => navigateToDishForm(res)}
        />
      ))}
    </ScrollView>
  );
};
export default memo(DishList);
