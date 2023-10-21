import React, {useState} from 'react';
import ControlledTextInput from '../../molecules/ControlledInputs/ControlledTextInput';
import {useAddDish} from './hooks/useAddDish';
import {ScrollView, View} from 'react-native';
import {useModalVisibility} from '../../molecules/Modal/useModalVisibility';
import PhotoField from '../PhotoField';

import IngredientsFieldsArray from '../IngredientsFieldsArray';
import ActionButtonsContainer from '../../molecules/ActionButtonsContainer';
import {Layout} from '../../atoms/Layout';
import styles from './styles';
import {useSelectPhoto} from './hooks/useSelectPhoto';
import SnackbarMessage from '../../atoms/SnackbarMessage';
import {Asset} from 'react-native-image-picker';
import OpenGalleryModal from '../OpenGalleryModal';

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
          <IngredientsFieldsArray form={form} />
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
