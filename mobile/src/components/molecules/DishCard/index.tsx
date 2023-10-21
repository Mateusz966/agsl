import React, {FC} from 'react';
import {Card} from 'react-native-paper';
import {memo} from 'react';
import Message from '../../atoms/Message';
import {DishCardProps} from './types';
import Photo from '../../atoms/Photo';
import {Pressable, View} from 'react-native';
import styles from './styles';
import ActionButtonsContainer from '../ActionButtonsContainer';

const DishCard: FC<DishCardProps> = ({dishName, photoSource}) => (
  <Pressable>
    <Card
      style={styles.cardBackgroundStyle}
      elevation={1}
      contentStyle={styles.cardContentStyle}>
      <Photo style={styles.photoStyle} source={photoSource ?? ''} />
      <View style={styles.dishNameContainer}>
        <Message style={styles.textStyle} message={dishName} />
        <ActionButtonsContainer
          primaryButtonHandler={() => {}}
          secondaryButtonHandler={() => {}}
          primaryButtonText="Edit"
          secondaryButtonText="Delete"
          containerStyle={styles.buttonContainer}
        />
      </View>
    </Card>
  </Pressable>
);

export default memo(DishCard);
