import {StyleSheet} from 'react-native';
import {colors, typography} from '../../../config/theme';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 55,
    right: 10,
    width: 150,
    backgroundColor: colors.secondary,
  },
  error: {
    ...typography.small,
    color: colors.error,
  },
});
