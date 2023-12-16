import {StyleSheet} from 'react-native';
import {colors} from '../../../config/theme';

export default StyleSheet.create({
  actionButtonsContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 100,
    marginLeft: 10,
    borderTopWidth: 0.5,
    borderTopColor: 'black',
  },
  listStyle: {
    height: '85%',
  },
  emptyBasketContainer: {opacity: 0.2, marginTop: 50},
  emptyBasket: {
    alignContent: 'center',
    position: 'absolute',
    top: 200,
    left: 50,
  },
  headlineMedium: {textAlign: 'center', fontWeight: '700'},
  headlineSmall: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: colors.primary,
  },
});
