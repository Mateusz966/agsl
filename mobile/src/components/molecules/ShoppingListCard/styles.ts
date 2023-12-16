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
    alignItems: 'center',
    width: '100%',
    gap: 20,
    marginLeft: 40,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  textStyle: {
    ...typography.medium,
    marginLeft: 20,
  },

  countTextStyle: {
    ...typography.form,
    color: colors.primary,
    fontWeight: '700',
  },
  iconStyle: {
    width: 30,
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
    backgroundColor: colors.outlineVariant,
    justifyContent: 'center',
  },

  itemContainer: {
    flexDirection: 'row',
    height: 50,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: colors.white,
    alignItems: 'center',
    textAlign: 'center',
    borderBottomWidth: 0.5,
    borderColor: colors.primary,
    justifyContent: 'flex-start',
    shadowColor: 'black',
    gap: 30,
    elevation: 6,
  },
});
