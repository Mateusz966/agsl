import {StyleSheet} from 'react-native';
import {colors, typography} from '../../../config/theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 5,
  },
  error: {
    ...typography.small,
    color: colors.error,
  },
});
