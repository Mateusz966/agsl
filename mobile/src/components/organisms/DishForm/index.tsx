import React, {useState} from 'react';
import Button from '../../molecules/Button';
import ControlledTextInput from '../../molecules/ControlledTextInput';
import {Layout} from '../../atoms/Layout';
import {useCamera} from '../Camera/useCamera';
import {DISH_UNITS} from './const';
import {useAddDish} from './useAddDish';
import {useFieldArray} from 'react-hook-form';
import {Image, ScrollView, Text, View} from 'react-native';
import ControlledSelect from '../../atoms/ControlledSelect';
import styles from './styles';
import {Unit} from '../../../api/dish/types';

const DishForm = () => {
  const {handleLaunchCamera, handleLaunchImageLibrary} = useCamera();
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  const {form, onSubmit} = useAddDish();

  const {
    control,
    formState: {errors},
    handleSubmit,
  } = form;

  const {fields, append, remove} = useFieldArray({
    control,
    name: 'ingredient',
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

  const [ingredients, setIngredients] = useState([]);
  const [showAddIngredient, setShowAddIngredient] = useState(false);
  const [newIngredient, setNewIngredient] = useState({
    name: '',
    quantity: '',
    unit: '',
  });

  const toggleAddIngredient = () => {
    setShowAddIngredient(!showAddIngredient);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, newIngredient]);
    setNewIngredient({name: '', quantity: '', unit: ''});
  };

  const deleteIngredient = index => {
    const updatedIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(updatedIngredients);
  };

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
      <Text>Dodaj swój posiłek</Text>
      <Layout>
        <ScrollView>
          {fields.map((item, index) => (
            <View key={index}>
              <View style={styles.ingredientRow}>
                <Text>
                  {item.name} - {item.quantity} {item.unit}
                </Text>
              </View>
              <View
                style={{
                  rowGap: 20,
                  padding: 20,
                }}>
                <ControlledTextInput
                  name={`ingredient.${index}.name`}
                  control={control}
                  displayName="Nazwa"
                />
                <ControlledTextInput
                  name={`ingredient.${index}.quantity`}
                  control={control}
                  displayName="Ilość"
                />
                <ControlledSelect
                  control={control}
                  handlePress={handlePress}
                  expanded={expanded}
                  options={DISH_UNITS}
                  name={`ingredient.${index}.unit`}
                  title={'Jednostka'}
                />
                <Button onPress={() => remove(index)}>-</Button>
              </View>
            </View>
          ))}
          <Button onPress={() => append({name: '', quantity: 0, unit: Unit.g})}>
            Add dish
          </Button>
          <View style={{alignItems: 'center', marginBottom: 10}}>
            {imgUrl && (
              <Image source={{uri: imgUrl}} style={{width: 200, height: 200}} />
            )}
          </View>
          <Button onPress={handleTakePhoto}>Take photo</Button>
          <Button onPress={handleSetPhoto}>Open galery</Button>
        </ScrollView>
      </Layout>
    </>
  );
};
export default DishForm;
