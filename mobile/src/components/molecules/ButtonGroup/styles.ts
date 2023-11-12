import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  buttonContainerHorizontal: {
    display: 'flex',
    flexDirection: 'row',
    gap: 3,
    justifyContent: 'space-between',
    width: '90%',
  },
  buttonContainerVertical: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});
