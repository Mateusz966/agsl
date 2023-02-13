import {StyleSheet} from 'react-native';
import {theme} from '../../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    marginHorizontal: 30,
  },
  input: {
    backgroundColor: theme.colors.surface,
  },
  error: {
    fontSize: 14,
    color: theme.colors.error,
    paddingHorizontal: 4,
    paddingTop: 4,
  },
});
