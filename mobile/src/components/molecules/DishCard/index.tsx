import React, {FC} from 'react';
import {Avatar, Card} from 'react-native-paper';
import {memo} from 'react';
import Message from '../../atoms/Message';
import {DishCardProps} from './types';
import {View} from 'react-native';
import styles from './styles';
import {ICON_PATHS} from '../../../utils/icons';
import Button from '../../atoms/Button';
import {components} from '../../../config/theme';

const DishCard: FC<DishCardProps> = ({
  dishName,
  photoSource,
  onPressHandler,
}) => (
  <Card
    style={styles.cardBackgroundStyle}
    elevation={5}
    contentStyle={styles.cardContentStyle}>
    <Avatar.Icon
      style={styles.photoStyle}
      size={100}
      icon={photoSource ?? ICON_PATHS.CAMERA}
    />
    <View style={styles.dishNameContainer}>
      <Message style={styles.textStyle} message={dishName} />
      <Button
        onPress={onPressHandler}
        style={styles.buttonStyle}
        textColor={components.button.textColor.primary}
        icon={ICON_PATHS.EDIT}>
        Edit
      </Button>
    </View>
  </Card>
);

export default memo(DishCard);
