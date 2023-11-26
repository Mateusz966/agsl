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
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'flex-start',
    width: '100%',
    marginTop: 10,
    marginLeft: 10,
  },
  textStyle: {
    marginBottom: 15,
    marginLeft: 20,
    ...typography.medium,
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
