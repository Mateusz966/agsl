import React, {useState} from 'react';
import ControlledTextInput from '../../molecules/ControlledInputs/ControlledTextInput';
import {ScrollView, View} from 'react-native';
import {useModalVisibility} from '../../molecules/Modal/useModalVisibility';
import PhotoField from '../PhotoField';

import ActionButtonsContainer from '../../molecules/ActionButtonsContainer';
import {Layout} from '../../atoms/Layout';
import styles from './styles';
import {useSelectDishPhoto} from '../../../common/hooks/Dish/useSelectDishPhoto';
import OpenGalleryModal from '../OpenGalleryModal';
import ControlledSelect from '../../molecules/ControlledInputs/ControlledSelect';
import {ICON_PATHS} from '../../../utils/icons';
import {Unit} from '../../../api/dish/types';
import {DISH_UNITS} from './types';
import {DishPhoto} from '../../../common/hooks/Dish/types';
import IconButton from '../../atoms/Buttons/IconButton';
import {theme} from '../../../config/theme';
import TextButton from '../../atoms/Buttons/TextButton';
import {ActivityIndicator} from 'react-native-paper';
import useDishForm from '../../../common/hooks/Dish/useDishForm';
import ControlledNumberInput from '../../molecules/ControlledInputs/ControlledNumberInput';
import {useRoute} from '@react-navigation/native';
import {Scenes} from '../../../navigators/RootNavigation/const';

const DishForm = () => {
  const [img, setImg] = useState<DishPhoto>(null);
  const {handleOnModalDissmiss, modalVisible, setModalVisible} =
    useModalVisibility();
  const routeName = useRoute().name;
  const {
    form,
    onSubmit,
    onCancel,
    append,
    fields,
    removeIngredient,
    isDishLoading,
  } = useDishForm({
    img,
  });
  const {buttonHandler, handleImageDelete} = useSelectDishPhoto({
    setImg,
    handleOnModalDissmiss,
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = form;

  return isDishLoading && routeName === Scenes.EditDish ? (
    <View style={styles.loader}>
      <ActivityIndicator size={50} />
    </View>
  ) : (
    <>
      <ScrollView style={styles.scrollContainer}>
        <Layout>
          <ControlledTextInput
            name={'name'}
            control={control}
            error={errors.name?.message}
            displayName="Meal name"
          />
          <OpenGalleryModal
            visible={modalVisible}
            handleOnDissmiss={handleOnModalDissmiss}
            buttonHandler={buttonHandler}
          />
          <PhotoField
            handleDelete={() => {
              handleImageDelete(() => form.setValue('photo', null));
              setImg(null);
            }}
            handleChange={() => setModalVisible(true)}
            handleOnPress={() => setModalVisible(true)}
            source={img ? img.uri : undefined}
          />
          <View style={styles.ingredientFields}>
            {fields.map(({id, ingredientId}, index) => (
              <View style={styles.addIngredientContainer} key={id}>
                <ControlledTextInput
                  name={`ingredients.${index}.ingredientId`}
                  control={control}
                  displayName="id"
                  error={errors?.ingredients?.[index]?.name?.message}
                  errorStyle={styles.ingredientsErrorStyle}
                  style={styles.hiddenInput}
                />
                <ControlledTextInput
                  name={`ingredients.${index}.name`}
                  control={control}
                  displayName="Name"
                  error={errors?.ingredients?.[index]?.name?.message}
                  errorStyle={styles.ingredientsErrorStyle}
                  style={styles.nameInput}
                />
                <ControlledNumberInput
                  name={`ingredients.${index}.amount`}
                  control={control}
                  displayName="Amount"
                  error={errors?.ingredients?.[index]?.amount?.message}
                  errorStyle={styles.ingredientsErrorStyle}
                  style={styles.amountInput}
                />
                <ControlledSelect
                  control={control}
                  title="Unit"
                  options={DISH_UNITS}
                  name={`ingredients.${index}.unit`}
                  style={styles.selectInput}
                />
                <IconButton
                  icon={ICON_PATHS.TRASH_ICON}
                  onPress={() => {
                    removeIngredient(ingredientId, index);
                  }}
                  size={25}
                  iconColor={theme.button.style.secondary.backgroundColor}
                  containerColor={theme.button.style.primary.backgroundColor}
                />
              </View>
            ))}
            <TextButton
              icon={ICON_PATHS.ADD_ICON}
              style={styles.addButton}
              onPress={() => append({name: '', amount: 1, unit: Unit.g})}>
              Add another ingredient
            </TextButton>
          </View>
        </Layout>
      </ScrollView>
      <View>
        <ActionButtonsContainer
          primaryButtonProps={{onPress: handleSubmit(onSubmit), text: 'Save'}}
          secondaryButtonProps={{onPress: onCancel, text: 'Cancel'}}
          containerStyle={styles.actionButtonsContainer}
        />
      </View>
    </>
  );
};

export default DishForm;
