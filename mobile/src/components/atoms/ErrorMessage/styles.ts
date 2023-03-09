import {StyleSheet} from 'react-native';
import {colors, typography} from '../../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },

  error: {
    ...typography.small,
    color: colors.error,
  },
});
