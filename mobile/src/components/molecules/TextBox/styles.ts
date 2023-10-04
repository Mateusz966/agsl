import {StyleSheet} from 'react-native';
import {colors, typography} from '../../../config/theme';

export const styles = StyleSheet.create({
  textStyle: {
    color: colors.primaryTextColor,
    ...typography.form,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
