import {StyleSheet} from 'react-native';
import {colors, components, typography} from '../../../config/theme';

export default StyleSheet.create({
  cardBackgroundStyle: {
    backgroundColor: colors.primary,
    borderBottomColor: 'black',
    shadowColor: 'black',
    borderBottomWidth: 0.2,
    borderRightWidth: 0.1,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 20,
    alignContent: 'center',
  },
  cardContentStyle: {
    backgroundColor: 'white',
    marginBottom: 10,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderBottomWidth: 1,
    borderRadius: 10,
    borderRightWidth: 0.1,
    borderTopColor: 'black',
  },
  dishNameContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'flex-start',
    width: '100%',
    marginTop: 20,
    borderLeftWidth: 2,
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
    marginHorizontal: 20,
    marginVertical: 20,
    width: 150,
    height: 120,
    borderRadius: 10,
    backgroundColor: colors.backdrop,
  },
});
