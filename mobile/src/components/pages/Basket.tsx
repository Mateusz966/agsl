import React, {memo} from 'react';
import {DishListBasket} from 'organisms';
import {Layout} from 'atoms';

const Basket = () => (
  <Layout>
    <DishListBasket />
  </Layout>
);
export default memo(Basket);
