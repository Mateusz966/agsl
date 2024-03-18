import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {useRoute} from '@react-navigation/native';
import {RootScenes} from 'navigators/RootNavigation';
import {useSelectDishPhoto, useDishForm} from 'common/hooks/Dish';
import {DishPhoto} from 'common/hooks/Dish/useDish.types';
import {useModalVisibility} from 'components/molecules/Modal/useModalVisibility';
import {ICON_PATHS} from 'assets';
import {Unit} from 'api/dish';
import {theme} from 'theme';
import {OpenGalleryModal, PhotoField} from 'organisms';
import {IconButton, Layout, Button} from 'atoms';
import {
  ActionButtonsContainer,
  ControlledNumberInput,
  ControlledSelect,
  ControlledTextInput,
} from 'molecules';
import {DISH_UNITS, styles} from '.';

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

  return isDishLoading && routeName === RootScenes.EditDish ? (
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
            <Button
              icon={ICON_PATHS.ADD_ICON}
              style={styles.addButton}
              onPress={() => append({name: '', amount: 1, unit: Unit.g})}>
              Add another ingredient
            </Button>
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
