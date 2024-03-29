import {StyleSheet} from 'react-native';
import {colors} from 'theme';

export const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.surface,
    minWidth: 100,
  },
  error: {
    fontSize: 14,
    color: colors.error,
    marginTop: 5,
    paddingHorizontal: 4,
    paddingTop: 4,
  },
});
