import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/theme';

export const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.surface,
  },
  error: {
    fontSize: 14,
    color: colors.error,
    paddingHorizontal: 4,
    paddingTop: 4,
  },
});
