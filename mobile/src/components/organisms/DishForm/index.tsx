import React, {useState} from 'react';
import Button from '../../molecules/Button';
import ControlledTextInput from '../../molecules/ControlledTextInput';
import {DISH_UNITS} from './const';
import {useAddDish} from './useAddDish';
import {useFieldArray} from 'react-hook-form';
import {ScrollView, View} from 'react-native';
import ControlledSelect from '../../molecules/ControlledSelect';
import {Unit} from '../../../api/dish/types';
import {ButtonType} from '../../molecules/Button/types';
import {useModalVisibility} from '../../molecules/Modal/useModalVisibility';
import Modal from '../../molecules/Modal';
import Photo from '../../atoms/Photo';
import styles from './styles';
import {Layout} from '../../atoms/Layout';
import PhotoField from '../../molecules/PhotoField';
import {Asset} from 'react-native-image-picker';

const DishForm = () => {
  const {handleOnDissmiss, setVisible, visible} = useModalVisibility();
  const {form, onSubmit, onCancel} = useAddDish();
  const {control, handleSubmit} = form;
  const {fields, append, remove} = useFieldArray({
    control,
    name: 'ingredients',
  });

  const [img, setImg] = useState<Asset | null>(null);

  console.log(fields);
  return (
    <>
      <ScrollView contentContainerStyle={{backgroundColor: 'white'}}>
        <ControlledTextInput
          name={`title`}
          control={control}
          displayName="Name of your meal"
        />
        <PhotoField handleOnPress={() => setVisible(true)} source={img?.uri} />
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
      </ScrollView>
      <View style={styles.actionButtonsContainer}>
        <Button
          type={ButtonType.Primary}
          style={styles.saveButton}
          onPress={handleSubmit(onSubmit)}>
          Save
        </Button>
        <Button
          type={ButtonType.Secondary}
          style={styles.cancelButton}
          onPress={onCancel}>
          Cancel
        </Button>
      </View>
    </>
  );
};
export default DishForm;
