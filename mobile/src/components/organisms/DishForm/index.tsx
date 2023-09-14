import React, {useState} from 'react';
import Button from '../../molecules/Button';
import ControlledTextInput from '../../molecules/ControlledTextInput';
import {Layout} from '../../atoms/Layout';
import {useCamera} from '../Camera/useCamera';
import {DISH_UNITS} from './const';
import {useAddDish} from './useAddDish';
import {useFieldArray} from 'react-hook-form';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import ControlledSelect from '../../molecules/ControlledSelect';
import styles from './styles';
import {Unit} from '../../../api/dish/types';
import {ButtonType} from '../../molecules/Button/types';
import {useModalVisibility} from '../../molecules/Modal/useModalVisibility';
import Modal from '../../molecules/Modal';
import Select from '../../molecules/Select';

const DishForm = () => {
  const {handleLaunchCamera, handleLaunchImageLibrary} = useCamera();
  const [expanded, setExpanded] = React.useState(true);
  const {handleOnDissmiss, setVisible, visible} = useModalVisibility();

  const handlePress = () => setExpanded(!expanded);

  const {form, onSubmit} = useAddDish();

  const {
    control,
    formState: {errors},
    handleSubmit,
  } = form;

  const {fields, append, remove} = useFieldArray({
    control,
    name: 'ingredients',
  });
  const [imgUrl, setImgUrl] = useState('');

  const handleSelectImage = async () => {
    const options = {
      title: 'Select Image',
      maxWidth: 2000,
      maxHeight: 2000,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
  };
  // const handleUploadImage = async () => {
  //   try {
  //     const fileData = await readFile(imgUrl, 'base64');
  //     // Cloudinary API keys
  //     const cloudinaryURL =
  //       'https://api.cloudinary.com/v1_1/vicorlands/image/upload';
  //     const apiKey = '0_0tX5v05VWXlMGlEf0yTH41wr8';
  //     const uploadPreset = 'irgydprw';
  //     // Create the form data
  //     const formData = new FormData();
  //     formData.append('file', `data:image/jpeg;base64,${fileData}`);
  //     formData.append('upload_preset', uploadPreset);
  //     formData.append('api_key', apiKey);
  //     const response = await fetch(cloudinaryURL, {
  //       method: 'POST',
  //       body: formData,
  //     });
  //     const result = await response.json();
  //     const {secure_url: imageUrl, public_id: imageId} = result;
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  const handleSetPhoto = async () => {
    await handleLaunchImageLibrary().then(res => {
      if (res.assets && res.assets.length > 0) {
        setImgUrl(res.assets[0].uri);
      } else {
        setImgUrl('');
      }
    });
  };

  const handleTakePhoto = async () => {
    await handleLaunchCamera().then(res => {
      if (res && res.assets.length > 0) {
        setImgUrl(res.assets[0].uri);
      } else {
        setImgUrl('');
      }
    });
  };
  console.log(fields);
  return (
    <>
      <ScrollView>
        <ControlledTextInput
          name={`title`}
          control={control}
          displayName="Name of your meal"
        />
        <Pressable onPress={() => setVisible(true)}>
          <Text>Add photo of your meal</Text>
          <Modal onDismiss={handleOnDissmiss} visible={visible}>
            <Button onPress={handleTakePhoto}>Take photo</Button>
            <Button onPress={handleSetPhoto}>Open galery</Button>
          </Modal>
          <View
            style={{
              alignItems: 'center',
              marginBottom: 10,
              width: 200,
              height: 200,
            }}>
            {imgUrl && (
              <Image source={{uri: imgUrl}} style={{width: 200, height: 200}} />
            )}
          </View>
        </Pressable>
        {fields.map((item, index) => (
          <View key={index}>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                alignItems: 'stretch',
                justifyContent: 'space-between',
              }}>
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
              <Select title="unit" options={DISH_UNITS} />
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
      <View
        style={{
          flexDirection: 'row-reverse',
          gap: 10,
          borderTopWidth: 0.5,
          borderTopColor: 'black',
          height: 70,
          alignItems: 'center',
        }}>
        <Button
          type={ButtonType.Primary}
          style={{width: 150}}
          onPress={handleSubmit(onSubmit)}>
          Save
        </Button>
        <Button
          type={ButtonType.Secondary}
          style={{width: 150}}
          onPress={() => {}}>
          Cancel
        </Button>
      </View>
    </>
  );
};
export default DishForm;
