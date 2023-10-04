import React, {FC, memo} from 'react';
import Button from '../../atoms/Button';
import ControlledTextInput from '../../molecules/ControlledInputs/ControlledTextInput';
import {useFieldArray} from 'react-hook-form';
import {ScrollView, View} from 'react-native';
import ControlledSelect from '../../molecules/ControlledInputs/ControlledSelect';
import {Unit} from '../../../api/dish/types';
import {ButtonType} from '../../atoms/Button/types';

import styles from './styles';
import {DISH_UNITS, IngredientsFieldsArrayProps} from './types';

const IngredientsFieldsArray: FC<IngredientsFieldsArrayProps> = ({control}) => {
  const {fields, append, remove} = useFieldArray({
    control,
    name: 'ingredients',
  });

  return (
    <ScrollView>
      {fields.map((_, index) => (
        <View style={styles.addIngredientContainer} key={index}>
          <ControlledTextInput
            name={`ingredients.${index}.name`}
            control={control}
            displayName="Nazwa"
          />
          <ControlledTextInput
            name={`ingredients.${index}.amount`}
            control={control}
            displayName="Ilość"
          />
          <ControlledSelect
            control={control}
            title="unit"
            options={DISH_UNITS}
            name={`ingredients.${index}.unit`}
          />
          <Button
            icon={require('mobile/src/assets/icons/trash.png')}
            onPress={() => remove(index)}
            style={styles.deleteButton}
          />
        </View>
      ))}
      <Button
        type={ButtonType.Secondary}
        icon={require('mobile/src/assets/icons/add.png')}
        style={styles.addButton}
        onPress={() => append({name: '', amount: 0, unit: Unit.g})}>
        Add another ingredient
      </Button>
    </ScrollView>
  );
};
export default memo(IngredientsFieldsArray);
