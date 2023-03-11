import {StyleSheet} from 'react-native';
import {colors, typography} from '../../../config/theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
  },

  error: {
    ...typography.small,
    color: colors.error,
  },
});
