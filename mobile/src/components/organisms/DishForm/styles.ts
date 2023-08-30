import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  selectFile: {
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: 'darkgrey',
  },
  buttonDisable: {
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: 'green',
    opacity: 0.6,
  },
  button: {
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: 'green',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  containerList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ingredientRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  addIngredientContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
