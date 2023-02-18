import {StyleSheet} from 'react-native';
import {theme} from '../../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },

  error: {
    fontSize: 14,
    color: theme.colors.error,
    paddingHorizontal: 4,
    paddingTop: 4,
  },
});
