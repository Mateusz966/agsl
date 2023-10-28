import React, {useState} from 'react';
import ControlledTextInput from '../../molecules/ControlledInputs/ControlledTextInput';
import {useAddDish} from './hooks/useAddDish';
import {ScrollView, View} from 'react-native';
import {useModalVisibility} from '../../molecules/Modal/useModalVisibility';
import PhotoField from '../PhotoField';

import ActionButtonsContainer from '../../molecules/ActionButtonsContainer';
import {Layout} from '../../atoms/Layout';
import styles from './styles';
import {useSelectPhoto} from './hooks/useSelectPhoto';
import SnackbarMessage from '../../atoms/SnackbarMessage';
import {Asset} from 'react-native-image-picker';
import OpenGalleryModal from '../OpenGalleryModal';
import ControlledSelect from '../../molecules/ControlledInputs/ControlledSelect';
import Button from '../../atoms/Button';
import {ICON_PATHS} from '../../../utils/icons';
import {Unit} from '../../../api/dish/types';
import {useFieldArray} from 'react-hook-form';
import {DISH_UNITS} from './types';

const DishForm = () => {
  const {handleOnDissmiss, setVisible, visible} = useModalVisibility();
  const [img, setImg] = useState<Asset | null>(null);
  const {buttonHandler, handleImageDelete} = useSelectPhoto({
    setImg,
    handleOnDissmiss,
  });
  const {
    form,
    onSubmit,
    onCancel,
    handleOnDissmiss: snackBarDissmiss,
    text,
    visible: snackBarVisible,
  } = useAddDish({img});
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = form;
  const {fields, append, remove} = useFieldArray({
    control,
    name: 'ingredients',
  });

  return (
    <>
      <ScrollView>
        <Layout>
          <ControlledTextInput
            name={'name'}
            control={control}
            error={errors.name?.message}
            displayName="Name of your meal"
          />
          <OpenGalleryModal
            visible={visible}
            handleOnDissmiss={handleOnDissmiss}
            buttonHandler={buttonHandler}
          />
          <PhotoField
            handleDelete={() =>
              handleImageDelete(() => form.resetField('photo'))
            }
            handleChange={() => setVisible(true)}
            handleOnPress={() => setVisible(true)}
            source={img?.uri}
          />
          <View style={styles.scrollContainer}>
            {fields.map((_, index) => (
              <View style={styles.addIngredientContainer} key={index}>
                <ControlledTextInput
                  name={`ingredients.${index}.name`}
                  control={control}
                  displayName="Name"
                  error={errors?.ingredients?.[index]?.name?.message}
                  errorStyle={styles.ingredientsErrorStyle}
                />
                <ControlledTextInput
                  name={`ingredients.${index}.amount`}
                  control={control}
                  displayName="Amount"
                  keyboardType="numeric"
                  error={errors?.ingredients?.[index]?.amount?.message}
                  errorStyle={styles.ingredientsErrorStyle}
                />
                <ControlledSelect
                  control={control}
                  title="Unit"
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
              onPress={() => append({name: '', amount: '1', unit: Unit.g})}>
              Add another ingredient
            </Button>
          </View>
        </Layout>
      </ScrollView>
      <View>
        <ActionButtonsContainer
          primaryButtonText="Save"
          primaryButtonHandler={handleSubmit(onSubmit)}
          secondaryButtonText="Cancel"
          secondaryButtonHandler={onCancel}
          containerStyle={styles.actionButtonsContainer}
        />
      </View>
      <SnackbarMessage visible={snackBarVisible} onDismiss={snackBarDissmiss}>
        {text}
      </SnackbarMessage>
    </>
  );
};
export default DishForm;
