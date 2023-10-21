import {StyleSheet} from 'react-native';
import {colors, components, typography} from '../../../config/theme';

export default StyleSheet.create({
  cardBackgroundStyle: {
    backgroundColor: colors.onPrimary,
    borderBottomColor: colors.secondary,
    shadowColor: 'black',
    borderWidth: 0.1,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 20,
    alignContent: 'center',
  },
  cardContentStyle: {
    flexDirection: 'row',
  },
  dishNameContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textStyle: {
    margin: 15,
    ...typography.large,
  },
  buttonContainer: {
    marginVertical: 0,
    height: 40,
  },
  photoStyle: {
    marginHorizontal: 20,
    marginVertical: 10,
    width: 120,
    height: 120,
    borderRadius: 100,
    ...components.button.style.primary,
  },
});
