import React from 'react';
import Button from '../../molecules/Button';
import ControlledTextInput from '../../molecules/ControlledInputs/ControlledTextInput';
import {useFieldArray} from 'react-hook-form';
import {View} from 'react-native';
import ControlledSelect from '../../molecules/ControlledInputs/ControlledSelect';
import {Unit} from '../../../api/dish/types';
import {ButtonType} from '../../molecules/Button/types';

import styles from './styles';
import {useAddDish} from '../DishForm/useAddDish';
import {DISH_UNITS} from './types';

const IngredientsFieldsArray = () => {
  const {form} = useAddDish();
  const {control} = form;
  const {fields, append, remove} = useFieldArray({
    control,
    name: 'ingredients',
  });

  return (
    <View>
      {fields.map((_, index) => (
        <View key={index}>
          <View style={styles.addIngredientContainer}>
            <ControlledTextInput
              name={`ingredients.${index}.name`}
              control={control}
              displayName="Nazwa"
            />
            <ControlledTextInput
              name={`ingredients.${index}.quantity`}
              control={control}
              displayName="Ilość"
            />
            <ControlledSelect
              control={control}
              title="unit"
              options={DISH_UNITS}
              name={`ingredients.${index}.unit`}
            />
            <Button onPress={() => remove(index)}>-</Button>
          </View>
        </View>
      ))}
      <Button
        type={ButtonType.Secondary}
        onPress={() => append({name: '', quantity: 0, unit: Unit.g})}>
        + Add another ingredient
      </Button>
    </View>
  );
};
export default IngredientsFieldsArray;
