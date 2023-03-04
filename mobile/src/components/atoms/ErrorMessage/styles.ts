import {StyleSheet} from 'react-native';
import {theme} from '../../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },

  error: {
    ...theme.typography.small,
    color: theme.colors.error,
  },
});
