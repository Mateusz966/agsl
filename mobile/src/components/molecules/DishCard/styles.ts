import {StyleSheet} from 'react-native';
import {colors, components, typography} from '../../../config/theme';

export default StyleSheet.create({
  cardBackgroundStyle: {
    backgroundColor: colors.primary,
    marginHorizontal: 20,
    marginVertical: 20,
    alignContent: 'center',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: 'black',
  },
  cardContentStyle: {
    backgroundColor: 'white',
    marginBottom: 3,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  dishNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  textStyle: {
    ...typography.medium,
    marginLeft: 20,
  },
  iconStyle: {
    marginBottom: 15,
    marginRight: 40,
  },
  buttonStyle: {
    ...components.button.style.primary,
    width: 120,
    height: 40,
    marginLeft: 20,
    marginBottom: 10,
  },
  photoStyle: {
    width: '100%',
    height: 130,
    borderRadius: 0,
  },
});
