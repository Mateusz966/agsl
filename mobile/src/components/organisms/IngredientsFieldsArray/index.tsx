import React, {FC, memo} from 'react';
import Button from '../../atoms/Button';
import ControlledTextInput from '../../molecules/ControlledInputs/ControlledTextInput';
import {useFieldArray} from 'react-hook-form';
import {View} from 'react-native';
import ControlledSelect from '../../molecules/ControlledInputs/ControlledSelect';
import {Unit} from '../../../api/dish/types';
import styles from './styles';
import {DISH_UNITS, IngredientsFieldsArrayProps} from './types';
import {ICON_PATHS} from '../../../utils/icons';

const IngredientsFieldsArray: FC<IngredientsFieldsArrayProps> = ({form}) => {
  const {
    control,
    formState: {errors},
  } = form;

  const {fields, append, remove} = useFieldArray({
    control,
    name: 'ingredients',
  });

  return (
    <View style={styles.scrollContainer}>
      {fields.map((_, index) => (
        <View style={styles.addIngredientContainer} key={index}>
          <ControlledTextInput
            name={`ingredients.${index}.name`}
            control={control}
            displayName="Nazwa"
            error={errors?.ingredients?.[index]?.name?.message}
          />
          <ControlledTextInput
            name={`ingredients.${index}.amount`}
            control={control}
            displayName="Ilość"
            keyboardType="numeric"
            error={errors?.ingredients?.[index]?.amount?.message}
          />
          <ControlledSelect
            control={control}
            title="unit"
            options={DISH_UNITS}
            name={`ingredients.${index}.unit`}
          />
          <Button
            icon={ICON_PATHS.TRASH_ICON}
            onPress={() => remove(index)}
            style={styles.deleteButton}
          />
        </View>
      ))}
      <Button
        icon={ICON_PATHS.ADD_ICON}
        style={styles.addButton}
        onPress={() => append({name: '', amount: 0, unit: Unit.g})}>
        Add another ingredient
      </Button>
    </View>
  );
};
export default memo(IngredientsFieldsArray);
