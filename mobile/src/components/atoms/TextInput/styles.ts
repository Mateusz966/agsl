import {StyleSheet} from 'react-native';
import {colors} from '../../../config/theme';

export const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.surface,
  },
  error: {
    fontSize: 14,
    color: colors.error,
    marginTop: 5,
    paddingHorizontal: 4,
    paddingTop: 4,
  },
});
