import {StyleSheet} from 'react-native';
import {colors} from 'theme';

export const styles = StyleSheet.create({
  container: {height: '100%'},
  flatlist: {marginTop: 20},
  button: {marginBottom: 20, marginHorizontal: 10, width: 200},
  loader: {
    justifyContent: 'center',
    width: '100%',
    height: '80%',
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
  name: {
    fontWeight: '700',
    marginRight: 50,
    marginLeft: 20,
    width: 100,
  },
  hiddenInput: {
    opacity: 0,
    position: 'absolute',
  },
  checkbox: {marginTop: 25, marginLeft: 10},
});
