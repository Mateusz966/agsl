import {StyleSheet} from 'react-native';
import {colors, typography} from 'theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 160,
    backgroundColor: colors.primaryButton,
    display: 'flex',
    justifyContent: 'space-between',
  },
  text: {
    ...typography.h1,
    color: colors.white,
    marginBottom: 20,
    marginLeft: 20,
    fontWeight: '800',
  },
  icon: {
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 10,
  },
});
