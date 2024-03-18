import {StyleSheet} from 'react-native';
import {colors, components} from 'theme';

export const styles = StyleSheet.create({
  cardBackgroundStyle: {
    backgroundColor: colors.primary,
    marginHorizontal: 25,
    marginTop: 20,
    alignContent: 'center',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: 'black',
  },
  cardContentStyle: {
    backgroundColor: 'white',
    marginBottom: 1.5,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  dishNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  textStyle: {
    marginLeft: 20,
  },
  countTextStyle: {
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
    borderBottomColor: colors.secondary,
    borderBottomWidth: 0.5,
    justifyContent: 'center',
  },
});
