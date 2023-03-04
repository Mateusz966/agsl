import {StyleSheet} from 'react-native';
import {theme} from '../../../utils/theme';

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: '#6152BE',
  },
  text: {
    ...theme.typography.medium,
    textAlign: 'center',
  },
});
