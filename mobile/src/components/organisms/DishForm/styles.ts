import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  addIngredientContainer: {
    marginTop: '5%',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    marginBottom: '5%',
  },
  actionButtonsContainer: {
    flexDirection: 'row-reverse',
    gap: 5,
    borderTopWidth: 0.5,
    borderTopColor: 'black',
    height: 100,
    alignItems: 'center',
  },
  cancelButton: {
    width: '25%',
  },
  saveButton: {
    width: '20%',
  },
});
