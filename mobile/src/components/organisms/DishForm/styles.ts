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
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  addButton: {
    marginTop: 10,
    width: '60%',
  },
  deleteButton: {
    marginTop: 10,
    width: 20,
  },
  scrollContainer: {
    marginTop: 10,
    width: '100%',
    height: '100%',
    alignContent: 'center',
    marginBottom: 50,
  },
  ingredientsErrorStyle: {
    maxWidth: 100,
  },
});
