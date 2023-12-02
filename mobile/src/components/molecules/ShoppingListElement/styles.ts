import {StyleSheet} from 'react-native';
import {colors, typography} from '../../../config/theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-around',
    marginHorizontal: 15,
    marginVertical: 10,
    backgroundColor: colors.white,
    alignContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.primary,
    shadowColor: 'black',
    elevation: 6,
  },
  badgeStyle: {
    alignSelf: 'center',
    backgroundColor: colors.primary,
    fontSize: 12,
    marginLeft: 10,
  },
  nameLabel: {
    ...typography.small,
    fontWeight: '700',
    marginTop: 2,
    color: colors.primary,
  },
  name: {
    ...typography.form,
    fontWeight: '700',
    marginRight: 50,
  },

  amount: {
    ...typography.form,
    marginRight: 100,
  },
  unit: {
    ...typography.form,
  },
});
