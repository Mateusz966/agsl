import {useDishContext} from 'common/contexts/DishContext/useDishContext';
import {DishResponse} from 'api/dish/types';

export const useDishListBasket = () => {
  const {setDishesList} = useDishContext();

  const addDishToBasket = (dish: DishResponse) => {
    setDishesList(prevState => {
      const existingIndex = prevState.findIndex(item => item.id === dish.id);

      if (existingIndex !== -1) {
        // If the dish already exists, update the count
        return prevState.map((item, index) =>
          index === existingIndex ? {...item, count: item.count + 1} : item,
        );
      } else {
        // If the dish is not in the list, add it with count 1
        return [{...dish, count: 1}, ...prevState];
      }
    });
  };

  const removeDishFromBasket = (dish: DishResponse) => {
    setDishesList(prevState => {
      const existingIndex = prevState.findIndex(item => item.id === dish.id);

      if (existingIndex !== -1) {
        // If the dish exists, decrement the count or remove if count is 1
        const updatedList = [...prevState];
        if (updatedList[existingIndex].count > 1) {
          updatedList[existingIndex] = {
            ...updatedList[existingIndex],
            count: updatedList[existingIndex].count - 1,
          };
        } else {
          // If count is 1, remove the item from the list
          updatedList.splice(existingIndex, 1);
        }
        return updatedList;
      } else {
        // If the dish is not in the list, do nothing
        return prevState;
      }
    });
  };

  return {
    addDishToBasket,
    removeDishFromBasket,
  };
};
