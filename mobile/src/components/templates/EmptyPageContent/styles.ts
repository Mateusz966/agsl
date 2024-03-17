import {StyleSheet} from 'react-native';
import {colors} from '../../../config/theme';

export const styles = StyleSheet.create({
  photoWrapper: {opacity: 0.2, marginTop: 50},
  textWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  headlineMedium: {textAlign: 'center', fontWeight: '700'},
  headlineSmall: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: colors.primary,
  },
  actionElementWrapper: {
    marginTop: 30,
  },
});
