import React, {useState} from 'react';
import ControlledTextInput from '../../molecules/ControlledInputs/ControlledTextInput';
import {useAddDish} from './useAddDish';
import {View} from 'react-native';
import {useModalVisibility} from '../../molecules/Modal/useModalVisibility';
import Modal from '../../molecules/Modal';
import PhotoField from '../PhotoField';
import {Asset} from 'react-native-image-picker';
import {
  handleSetPhoto,
  handleTakePhoto,
} from '../../../utils/CameraSettings/helpers';
import IngredientsFieldsArray from '../IngredientsFieldsArray';
import ActionButtonsContainer from '../../molecules/ActionButtonsContainer';
import {Layout} from '../../atoms/Layout';

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
      <Layout>
        <ControlledTextInput
          name={`name`}
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
        <IngredientsFieldsArray control={control} />
      </Layout>
      <View>
        <ActionButtonsContainer
          primaryButtonText="Save"
          primaryButtonHandler={handleSubmit(onSubmit)}
          secondaryButtonText="Cancel"
          secondaryButtonHandler={onCancel}
        />
      </View>
    </>
  );
};
export default DishForm;
