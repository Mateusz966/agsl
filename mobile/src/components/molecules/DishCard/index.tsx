import React, {FC} from 'react';
import {Card} from 'react-native-paper';
import {memo} from 'react';
import Message from '../../atoms/Message';
import {DishCardProps} from './types';
import {Pressable, View} from 'react-native';
import styles from './styles';
import Photo from '../../atoms/Photo';

const DishCard: FC<DishCardProps> = ({
  dishName,
  photoSource,
  onPressHandler,
}) => {
  return (
    <Pressable onPress={onPressHandler}>
      <Card
        style={styles.cardBackgroundStyle}
        elevation={5}
        contentStyle={styles.cardContentStyle}>
        <Photo
          uri={
            photoSource ??
            'C:/Users/victo/OneDrive/Pulpit/mine-projects/agsl/mobile/src/assets/icons/add.png'
          }
          style={styles.photoStyle}
        />
        <View style={styles.dishNameContainer}>
          <Message style={styles.textStyle} message={dishName} />
        </View>
      </Card>
    </Pressable>
  );
};

export default memo(DishCard);
