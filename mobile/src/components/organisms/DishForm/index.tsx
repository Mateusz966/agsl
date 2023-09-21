import React, {useState} from 'react';
import ControlledTextInput from '../../molecules/ControlledInputs/ControlledTextInput';
import {useAddDish} from './useAddDish';
import {ScrollView} from 'react-native';
import {useModalVisibility} from '../../molecules/Modal/useModalVisibility';
import Modal from '../../molecules/Modal';
import PhotoField from '../../molecules/PhotoFieldComponents/PhotoField';
import {Asset} from 'react-native-image-picker';
import {handleSetPhoto, handleTakePhoto} from '../Camera/helpers';
import IngredientsFieldsArray from '../IngredientsFieldsArray';
import ActionButtonsContainer from '../../molecules/ActionButtonsContainer';
import styles from './styles';

const DishForm = () => {
  const {handleOnDissmiss, setVisible, visible} = useModalVisibility();
  const {form, onSubmit, onCancel} = useAddDish();
  const {control, handleSubmit} = form;
  const [img, setImg] = useState<Asset | null>(null);

  const handleImageSelection = (selectedImg: Asset | null) => {
    setImg(selectedImg);
    form.setValue('photo', selectedImg);
  };

  const handleImageDelete = () => {
    form.resetField('photo');
    setImg(null);
  };

  return (
    <>
      <ScrollView>
        <ControlledTextInput
          name={`title`}
          control={control}
          displayName="Name of your meal"
        />
        <Modal onDismiss={handleOnDissmiss} visible={visible}>
          <ActionButtonsContainer
            primaryButtonText="Gallery"
            primaryButtonHandler={() =>
              handleSetPhoto().then(res =>
                res ? handleImageSelection(res) : setImg(null),
              )
            }
            secondaryButtonText="Camera"
            secondaryButtonHandler={() =>
              handleTakePhoto().then(res =>
                res ? handleImageSelection(res) : setImg(null),
              )
            }></ActionButtonsContainer>
        </Modal>
        <PhotoField
          handleDelete={handleImageDelete}
          handleChange={() => setVisible(true)}
          handleOnPress={() => setVisible(true)}
          source={img?.uri}></PhotoField>
        <IngredientsFieldsArray />
      </ScrollView>
      <ActionButtonsContainer
        primaryButtonText={'Save'}
        primaryButtonHandler={handleSubmit(onSubmit)}
        secondaryButtonText="Cancel"
        secondaryButtonHandler={onCancel}
        primaryButtonStyle={styles.saveButton}
        secondaryButtonStyle={styles.cancelButton}
      />
    </>
  );
};
export default DishForm;
