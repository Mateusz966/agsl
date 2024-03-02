import React, {memo} from 'react';
import DishListBasket from '../organisms/DishListBasket';
import {Layout} from '../atoms/Layout';

const Basket = () => (
  <Layout>
    <DishListBasket />
  </Layout>
);
export default memo(Basket);
