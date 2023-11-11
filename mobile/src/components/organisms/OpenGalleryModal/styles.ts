import {StyleSheet} from 'react-native';
import {colors, typography} from '../../../config/theme';

export default StyleSheet.create({
  modalButtonsContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  modalTitle: {
    textAlign: 'center',
    ...typography.large,
    color: colors.primary,
    height: 50,
  },
  modalBody: {
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'center',
    ...typography.form,
    height: 50,
    width: 270,
  },
});
