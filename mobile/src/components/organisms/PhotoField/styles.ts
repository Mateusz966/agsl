import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {width: '100%', height: '30%', marginVertical: 20},
  image: {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: 150,
    aspectRatio: 1,
    overflow: 'hidden',
  },
});
