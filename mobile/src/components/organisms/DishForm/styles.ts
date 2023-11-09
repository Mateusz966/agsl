import {StyleSheet} from 'react-native';

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
  addIngredientContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  addButton: {
    width: '60%',
  },
  scrollContainer: {
    marginTop: 15,
    width: '100%',
    height: '100%',
    alignContent: 'center',
  },
  ingredientsErrorStyle: {
    maxWidth: 100,
  },
  ingredientFields: {
    marginTop: 15,
  },
});
