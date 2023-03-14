import {StyleSheet} from 'react-native';
import {colors} from '../../../config/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.sceneContainerBackground,
  },
  indicatorStyle: {
    backgroundColor: colors.tabActive,
  },
  indicatorContainerStyle: {
    backgroundColor: colors.primaryButton,
  },
});
